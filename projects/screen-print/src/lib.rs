use wasm_bindgen::prelude::*;
use std::collections::VecDeque;

const MIN_FIELD_SIZE: usize = 200; // Minimum connected pixels per field
const MIN_COLOR_PERCENT: f32 = 0.20; // Each color (including white) must have at least 20%

/// Process image: generates halftone raster + 4 posterized color layers
/// Algorithm:
/// 1. Assign all pixels to closest of 4 colors (A, B, C, white)
/// 2. Balance so each color has at least 20%
/// 3. Filter small fields < 200px
/// 4. Fill gaps (no transparency)
/// 5. Generate halftone raster
/// Returns 5 layers: [raster, colorA, colorB, colorC, white]
#[wasm_bindgen]
pub fn process_image(
    raw_pixels: &[u8], 
    width: u32, 
    height: u32, 
    color_a_hex: &str,
    color_b_hex: &str,
    color_c_hex: &str,
    dot_size: u32
) -> Result<JsValue, JsValue> {
    let color_a = hex_to_rgb(color_a_hex);
    let color_b = hex_to_rgb(color_b_hex);
    let color_c = hex_to_rgb(color_c_hex);
    let white = [255u8, 255u8, 255u8];

    let w = width as usize;
    let h = height as usize;
    let num_pixels = w * h;
    let size = num_pixels * 4;
    
    // Output layers (RGBA)
    let mut raster_layer = vec![0u8; size];
    let mut layer_a = vec![0u8; size];
    let mut layer_b = vec![0u8; size];
    let mut layer_c = vec![0u8; size];
    let mut layer_white = vec![0u8; size];

    let dot_spacing = dot_size.max(2) as usize;
    
    // ========================================
    // STEP 1: Assign all pixels to closest of 4 colors
    // ========================================
    let all_colors: [&[u8; 3]; 4] = [&color_a, &color_b, &color_c, &white];
    
    // Color map: 0=unassigned, 1=A, 2=B, 3=C, 4=white
    let mut color_map: Vec<u8> = vec![0; num_pixels];
    
    // Store distances for rebalancing (all 4 colors)
    let mut pixel_distances: Vec<[f32; 4]> = vec![[0.0; 4]; num_pixels];
    
    for idx in 0..num_pixels {
        let px = idx * 4;
        let pixel = [
            raw_pixels[px],
            raw_pixels[px + 1],
            raw_pixels[px + 2]
        ];
        
        // Calculate distances to all 4 colors
        for (i, color) in all_colors.iter().enumerate() {
            pixel_distances[idx][i] = ((pixel[0] as f32 - color[0] as f32).powi(2) +
                                       (pixel[1] as f32 - color[1] as f32).powi(2) +
                                       (pixel[2] as f32 - color[2] as f32).powi(2)).sqrt();
        }
        
        // Find closest color
        let closest_idx = pixel_distances[idx].iter()
            .enumerate()
            .min_by(|a, b| a.1.partial_cmp(b.1).unwrap())
            .map(|(i, _)| i)
            .unwrap();
        
        color_map[idx] = (closest_idx + 1) as u8; // 1=A, 2=B, 3=C, 4=white
    }
    
    // ========================================
    // STEP 2: Balance colors - each must have at least 20%
    // ========================================
    let min_per_color = (num_pixels as f32 * MIN_COLOR_PERCENT) as usize;
    
    // Count current distribution (4 colors)
    let mut counts = [0usize; 4];
    for &c in color_map.iter() {
        if c >= 1 && c <= 4 {
            counts[(c - 1) as usize] += 1;
        }
    }
    
    // Iteratively balance until all colors have >= 20%
    for _ in 0..20 { // Max iterations
        // Find underrepresented color
        let (under_idx, under_count) = counts.iter()
            .enumerate()
            .min_by_key(|(_, &c)| c)
            .map(|(i, &c)| (i, c))
            .unwrap();
        
        if under_count >= min_per_color {
            break; // All colors balanced
        }
        
        // Find overrepresented color
        let (over_idx, _) = counts.iter()
            .enumerate()
            .max_by_key(|(_, &c)| c)
            .map(|(i, &c)| (i, c))
            .unwrap();
        
        if over_idx == under_idx {
            break; // Can't balance
        }
        
        // Collect pixels from overrepresented color that are closest to underrepresented
        let mut candidates: Vec<(usize, f32)> = Vec::new();
        
        for idx in 0..num_pixels {
            if color_map[idx] == (over_idx + 1) as u8 {
                let dist_to_under = pixel_distances[idx][under_idx];
                candidates.push((idx, dist_to_under));
            }
        }
        
        // Sort by distance to underrepresented (closest first)
        candidates.sort_by(|a, b| a.1.partial_cmp(&b.1).unwrap());
        
        // Reassign pixels until balanced
        let needed = min_per_color - under_count;
        let transfer = needed.min(candidates.len()).min(counts[over_idx].saturating_sub(min_per_color));
        
        for i in 0..transfer {
            let idx = candidates[i].0;
            color_map[idx] = (under_idx + 1) as u8;
            counts[over_idx] -= 1;
            counts[under_idx] += 1;
        }
    }
    
    // ========================================
    // STEP 3: Filter fields < 200 connected pixels
    // ========================================
    // Process each color layer separately
    for color_id in 1..=4u8 {
        filter_small_fields(&mut color_map, w, h, color_id, MIN_FIELD_SIZE);
    }
    
    // ========================================
    // STEP 3b: Fill gaps - no transparent pixels allowed
    // ========================================
    let all_colors: [&[u8; 3]; 4] = [&color_a, &color_b, &color_c, &white];
    
    for idx in 0..num_pixels {
        if color_map[idx] == 0 {
            let px = idx * 4;
            let pixel = [
                raw_pixels[px],
                raw_pixels[px + 1],
                raw_pixels[px + 2]
            ];
            
            // Find closest among all 4 colors
            let closest = pixel_distances[idx].iter()
                .enumerate()
                .min_by(|a, b| a.1.partial_cmp(b.1).unwrap())
                .map(|(i, _)| i)
                .unwrap();
            
            color_map[idx] = (closest + 1) as u8; // 1=A, 2=B, 3=C, 4=white
        }
    }
    
    // ========================================
    // STEP 4: Write to output layers
    // ========================================
    for idx in 0..num_pixels {
        let px = idx * 4;
        match color_map[idx] {
            1 => apply_pixel(&mut layer_a, px, &color_a),
            2 => apply_pixel(&mut layer_b, px, &color_b),
            3 => apply_pixel(&mut layer_c, px, &color_c),
            4 => apply_pixel(&mut layer_white, px, &white),
            _ => {} // Should never happen now
        }
    }
    
    // ========================================
    // STEP 5: Generate halftone raster (shadows) with 45° rotation
    // ========================================
    let angle_rad = 45.0_f32.to_radians();
    let cos_a = angle_rad.cos();
    let sin_a = angle_rad.sin();
    
    let grid_range = (w.max(h) as f32 * 1.5) as isize;
    
    for grid_y in (-grid_range..grid_range).step_by(dot_spacing) {
        for grid_x in (-grid_range..grid_range).step_by(dot_spacing) {
            let gx_f = grid_x as f32;
            let gy_f = grid_y as f32;
            let rotated_x = gx_f * cos_a - gy_f * sin_a;
            let rotated_y = gx_f * sin_a + gy_f * cos_a;
            
            let sample_x = rotated_x as isize;
            let sample_y = rotated_y as isize;
            
            if sample_x < 0 || sample_y < 0 || sample_x >= w as isize || sample_y >= h as isize {
                continue;
            }
            
            let sample_idx = (sample_y as usize) * w + (sample_x as usize);
            let sample_px = sample_idx * 4;
            
            if sample_px + 2 >= raw_pixels.len() {
                continue;
            }
            
            let r = raw_pixels[sample_px] as f32;
            let g = raw_pixels[sample_px + 1] as f32;
            let b = raw_pixels[sample_px + 2] as f32;
            let luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255.0;
            
            let darkness = 1.0 - luminance;
            
            if darkness < 0.15 {
                continue;
            }
            
            let max_radius = (dot_spacing as f32) / 2.0;
            let radius = max_radius * darkness;
            let radius_sq = radius * radius;
            
            let center_x = rotated_x;
            let center_y = rotated_y;
            
            let scan_radius = (radius + 2.0) as isize;
            let start_y = (center_y - scan_radius as f32) as isize;
            let end_y = (center_y + scan_radius as f32) as isize;
            let start_x = (center_x - scan_radius as f32) as isize;
            let end_x = (center_x + scan_radius as f32) as isize;
            
            for py in start_y..=end_y {
                if py < 0 || py >= h as isize {
                    continue;
                }
                for px_coord in start_x..=end_x {
                    if px_coord < 0 || px_coord >= w as isize {
                        continue;
                    }
                    
                    let dx = px_coord as f32 - center_x;
                    let dy = py as f32 - center_y;
                    
                    if dx * dx + dy * dy <= radius_sq {
                        let idx = (py as usize) * w + (px_coord as usize);
                        let px = idx * 4;
                        raster_layer[px] = 0;
                        raster_layer[px + 1] = 0;
                        raster_layer[px + 2] = 0;
                        raster_layer[px + 3] = 255;
                    }
                }
            }
        }
    }

    Ok(serde_wasm_bindgen::to_value(&vec![
        raster_layer,
        layer_a,
        layer_b,
        layer_c,
        layer_white
    ])?)
}

/// Flood-fill to find and remove connected components smaller than min_size
fn filter_small_fields(color_map: &mut Vec<u8>, w: usize, h: usize, target_color: u8, min_size: usize) {
    let num_pixels = w * h;
    let mut visited = vec![false; num_pixels];
    
    for start_idx in 0..num_pixels {
        if visited[start_idx] || color_map[start_idx] != target_color {
            continue;
        }
        
        // BFS to find connected component
        let mut component: Vec<usize> = Vec::new();
        let mut queue: VecDeque<usize> = VecDeque::new();
        queue.push_back(start_idx);
        visited[start_idx] = true;
        
        while let Some(idx) = queue.pop_front() {
            component.push(idx);
            
            let x = idx % w;
            let y = idx / w;
            
            // 4-connectivity neighbors
            let neighbors = [
                if x > 0 { Some(idx - 1) } else { None },      // Left
                if x < w - 1 { Some(idx + 1) } else { None },  // Right
                if y > 0 { Some(idx - w) } else { None },      // Up
                if y < h - 1 { Some(idx + w) } else { None },  // Down
            ];
            
            for neighbor in neighbors.iter().flatten() {
                let n = *neighbor;
                if !visited[n] && color_map[n] == target_color {
                    visited[n] = true;
                    queue.push_back(n);
                }
            }
        }
        
        // If component too small, remove it (set to 0 = unassigned)
        if component.len() < min_size {
            for idx in component {
                color_map[idx] = 0;
            }
        }
    }
}

fn hex_to_rgb(hex: &str) -> [u8; 3] {
    let hex = hex.trim_start_matches('#');
    let r = u8::from_str_radix(&hex[0..2], 16).unwrap_or(0);
    let g = u8::from_str_radix(&hex[2..4], 16).unwrap_or(0);
    let b = u8::from_str_radix(&hex[4..6], 16).unwrap_or(0);
    [r, g, b]
}

fn find_closest_color(pixel: &[u8; 3], palette: &[&[u8; 3]; 3]) -> (usize, f32) {
    palette.iter()
        .enumerate()
        .map(|(i, color)| {
            let dist = ((pixel[0] as f32 - color[0] as f32).powi(2) +
                        (pixel[1] as f32 - color[1] as f32).powi(2) +
                        (pixel[2] as f32 - color[2] as f32).powi(2)).sqrt();
            (i, dist)
        })
        .min_by(|a, b| a.1.partial_cmp(&b.1).unwrap())
        .unwrap()
}

fn calculate_all_distances(pixel: &[u8; 3], palette: &[&[u8; 3]; 3]) -> [f32; 3] {
    let mut distances = [0.0f32; 3];
    for (i, color) in palette.iter().enumerate() {
        distances[i] = ((pixel[0] as f32 - color[0] as f32).powi(2) +
                        (pixel[1] as f32 - color[1] as f32).powi(2) +
                        (pixel[2] as f32 - color[2] as f32).powi(2)).sqrt();
    }
    distances
}

fn apply_pixel(buffer: &mut Vec<u8>, idx: usize, color: &[u8; 3]) {
    buffer[idx] = color[0];
    buffer[idx + 1] = color[1];
    buffer[idx + 2] = color[2];
    buffer[idx + 3] = 255;
}
