// Svelte 5 runes-based state (PRD §4.1)
// Replaces writable() stores with $state()

export const appState = $state({
  // Layer visibility (each layer has its own scraper 0-100%)
  layerVisibility: {
    raster: 0,   // z50 - Halftone shadow dots (top)
    colorA: 0,   // z40
    colorB: 0,   // z30
    colorC: 0,   // z20
    white: 0     // z10 - Base (bottom)
  },
  
  // Processed layer images (PNG data URLs)
  layers: {
    raster: null,  // Halftone black dots
    colorA: null,  // Posterized color field
    colorB: null,  // Posterized color field
    colorC: null,  // Posterized color field
    white: null    // White base layer
  },
  
  // User-defined ink colors
  palette: {
    colorA: '#ff0000',
    colorB: '#00ff00',
    colorC: '#0000ff'
  },

  // Halftone settings
  halftone: {
    dotSize: 12,     // Max dot diameter in pixels (was 4, now 3x = 12, 9x area)
    angle: 45,       // Dot grid rotation
    threshold: 0.1   // Minimum brightness to show dot
  },

  // Cropped source image (from prep window)
  croppedImage: null
});
