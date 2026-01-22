# **PRD: Screen Print Simulator**

## **1. Project Goal**

Transform images into a 5-layer screen print combining halftone raster shadows with posterized color fields. Creates a pop-art aesthetic with the tactile feel of screen printing. 100% client-side processing ensures data privacy.

## **2. System Dictionary**

| Term | Definition |
|------|------------|
| **SourceImage** | Raw file uploaded by user |
| **ImagePrep** | 288×384 frame where user positions/crops image |
| **CroppedImage** | 768×1024 high-res extract from ImagePrep |
| **RasterLayer** | Black halftone dots (45° grid) representing shadows/values (z50) |
| **ColorLayer[A,B,C]** | Three posterized color channels (z40, z30, z20) |
| **WhiteLayer** | White posterized fields (z10, bottom layer) |
| **LayerScraper** | Per-layer opacity slider (0-100%) |

## **3. Functional Requirements**

### **3.1 Data Privacy (Strict)**

* **Zero Persistence:** No images sent to any server/database
* **Client-Side Processing:** Rust WebAssembly + Canvas API
* **No Export:** Disable right-click save; omit download buttons

### **3.2 Image Processing Pipeline**

#### **Step 1: Image Prep**
- User uploads image to 288×384 frame
- Small images auto-upscaled via multi-pass Lanczos resampling
- User drags image to position (locked to edges, no black showing)
- "Apply Crop" extracts 768×1024 output

#### **Step 2: Posterization (WASM)**
1. Assign each pixel to closest of 4 colors (colorA, colorB, colorC, white)
2. Balance distribution: enforce 20% minimum per color
3. Filter small fields: remove connected regions < 200 pixels
4. Fill gaps: no transparent pixels (except raster overlay)

#### **Step 3: Halftone Raster (WASM)**
- 45° rotated grid of black dots
- Dot size based on local luminance (darker = larger dots)
- 12px base dot diameter
- Transparent background (overlays on top of colors)

### **3.3 Layer Stacking (Bottom to Top)**

| Z-Index | Layer | Content |
|---------|-------|--------|
| z10 | White | Posterized white fields |
| z20 | Color C | Posterized color fields |
| z30 | Color B | Posterized color fields |
| z40 | Color A | Posterized color fields |
| z50 | Raster | Halftone shadow dots |

### **3.4 Reveal Mechanism (Scrapers)**

- Each layer has independent opacity slider (0-100%)
- Simulates screen printing reveal
- All layers start at 0% after processing

## **4. Technical Architecture**

### **4.1 Core Stack**

| Layer | Technology |
|-------|------------|
| **Frontend** | Svelte 5 (runes) + Vite |
| **State** | `$state()`, `$derived()`, `$effect()` |
| **Processing** | Rust → WebAssembly (wasm-pack, wasm-bindgen) |
| **Styling** | Scoped CSS |

### **4.2 Key Algorithms**

| Algorithm | Purpose |
|-----------|--------|
| Multi-pass upscale | 1.5× steps with high-quality smoothing |
| Euclidean distance | Color matching to palette |
| Iterative balancing | Enforce 20% minimum per color |
| BFS flood-fill | Detect and filter small fields |
| 45° grid rotation | Halftone dot placement |

### **4.3 Display Dimensions**

| Context | Size | Ratio |
|---------|------|-------|
| Processing | 768×1024 | 3:4 |
| Display frames | 288×384 | 3:4 |
| Frame border | 5px solid #333 | - |
| Border radius | 4px | - |

## **5. UI Components**

### **5.1 Grid Layout (3 columns × 2 rows)**

| Row | Col 1 | Col 2 | Col 3 |
|-----|-------|-------|-------|
| 1 | ImagePrep | CroppedPreview | CanvasDisplay |
| 2 | ColorPickers + CreatePrint | LayerScrapers (spans 2-3) | - |

### **5.2 Component List**

| Component | Purpose |
|-----------|--------|
| **ImageCropper** | Upload, upscale, drag-to-position, crop |
| **CroppedPreview** | Shows 768×1024 result at 288×384 |
| **CanvasDisplay** | Stacked layers with opacity control |
| **ColorPickers** | 3× color inputs for palette |
| **LayerScrapers** | 5× range sliders for layer opacity |

## **6. Constraints & Safety**

* **Browser:** Modern browsers (Chrome, Firefox, Safari)
* **Memory:** Revoke `URL.createObjectURL` after use
* **Bundle:** WASM target < 500KB gzipped
* **Position Lock:** Image cannot be dragged to show black edges
* **Color Balance:** Each color guaranteed ≥20% of pixels
