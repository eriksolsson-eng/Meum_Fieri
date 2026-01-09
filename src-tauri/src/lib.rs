use serde::{Deserialize, Serialize};

// ========================================================================
// DATA STRUCTURES
// ========================================================================

#[derive(Serialize, Deserialize, Clone)]
pub struct ImpactResult {
    pub hit: bool,
    pub deflection_error: f64,
    pub elevation_error: f64,
    pub total_error: f64,
    pub feedback: String,
    pub rating: String,
}

#[derive(Serialize, Deserialize, Clone)]
pub struct TrainingRecord {
    pub timestamp: String,
    pub missions_completed: u32,
    pub avg_error: f64,
    pub total_time_seconds: f64,
    pub rating: String,
}

// ========================================================================
// TAURI COMMANDS
// ========================================================================

/// Calculate impact result based on firing parameters
#[tauri::command]
fn calculate_impact(
    sight_deflection: f64,
    sight_elevation: f64,
    target_deflection: f64,
    target_elevation: f64,
    lateral_bubble_pos: f64,
    elevation_bubble_pos: f64,
    symmetry_error: f64,
) -> ImpactResult {
    // Calculate individual errors
    let deflection_error = (sight_deflection - target_deflection).abs();
    let elevation_error = (sight_elevation - target_elevation).abs();
    let lateral_level_error = lateral_bubble_pos.abs() * 2.0;
    let elevation_level_error = elevation_bubble_pos.abs() * 2.0;
    let parallax_error = symmetry_error * 3.0;

    // Weighted total error
    let total_error = deflection_error 
        + elevation_error 
        + (lateral_level_error * 0.5) 
        + (elevation_level_error * 0.5) 
        + (parallax_error * 0.3);

    // Generate feedback
    let (feedback, rating, hit) = if total_error < 5.0 {
        ("Target destroyed. Good effect on target.".to_string(), "🎯 ON TARGET".to_string(), true)
    } else if total_error < 15.0 {
        ("Near miss. Fire for effect.".to_string(), "📍 NEAR MISS".to_string(), false)
    } else if total_error < 35.0 {
        ("Off target. Re-lay and fire.".to_string(), "⚠️ OFF TARGET".to_string(), false)
    } else if total_error < 75.0 {
        ("CHECK FIRE! Near civilian infrastructure.".to_string(), "🚨 DANGER".to_string(), false)
    } else {
        ("CEASE FIRE! Friendly fire incident!".to_string(), "💀 CRITICAL".to_string(), false)
    };

    ImpactResult {
        hit,
        deflection_error,
        elevation_error,
        total_error,
        feedback,
        rating,
    }
}

/// Generate a random training mission
#[tauri::command]
fn generate_mission() -> (i32, i32, u8) {
    use std::time::{SystemTime, UNIX_EPOCH};
    
    // Simple pseudo-random based on time
    let seed = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .unwrap()
        .as_nanos() as u64;
    
    let deflection = ((seed % 1800) as i32) - 900;  // -900 to +900
    let elevation = 300 + ((seed / 1000 % 400) as i32);  // 300 to 700
    let charge = 1 + ((seed / 10000 % 6) as u8);  // 1 to 6
    
    (deflection, elevation, charge)
}

/// Calculate performance rating from error
#[tauri::command]
fn get_performance_rating(avg_error: f64) -> String {
    if avg_error <= 5.0 {
        "🌟 EXCELLENT".to_string()
    } else if avg_error <= 10.0 {
        "⭐ GOOD".to_string()
    } else if avg_error <= 20.0 {
        "🟡 ACCEPTABLE".to_string()
    } else if avg_error <= 35.0 {
        "🟠 POOR".to_string()
    } else {
        "🔴 FAILING".to_string()
    }
}

// ========================================================================
// APP ENTRY POINT
// ========================================================================

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            calculate_impact,
            generate_mission,
            get_performance_rating,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
