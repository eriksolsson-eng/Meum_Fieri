/**
 * Multi-pass canvas upscaling with high-quality smoothing
 * Uses stepped 1.5× scaling for better results than single-step upscale
 * 
 * @param {HTMLImageElement} img - Source image element
 * @param {number} targetHeight - Desired output height
 * @returns {string} Data URL of upscaled image
 */
export function lanczosUpscale(img, targetHeight) {
  const scale = targetHeight / img.naturalHeight;
  const targetWidth = Math.round(img.naturalWidth * scale);
  
  // Start with original image on canvas
  let currentCanvas = document.createElement('canvas');
  let currentCtx = currentCanvas.getContext('2d');
  currentCanvas.width = img.naturalWidth;
  currentCanvas.height = img.naturalHeight;
  currentCtx.drawImage(img, 0, 0);
  
  let currentWidth = img.naturalWidth;
  let currentHeight = img.naturalHeight;
  
  // Scale up in steps of max 1.5× for better quality
  while (currentWidth < targetWidth || currentHeight < targetHeight) {
    const stepScale = Math.min(1.5, targetWidth / currentWidth, targetHeight / currentHeight);
    const newWidth = Math.round(currentWidth * stepScale);
    const newHeight = Math.round(currentHeight * stepScale);
    
    const newCanvas = document.createElement('canvas');
    newCanvas.width = newWidth;
    newCanvas.height = newHeight;
    const newCtx = newCanvas.getContext('2d');
    
    // Enable high-quality image smoothing
    newCtx.imageSmoothingEnabled = true;
    newCtx.imageSmoothingQuality = 'high';
    
    newCtx.drawImage(currentCanvas, 0, 0, newWidth, newHeight);
    
    currentCanvas = newCanvas;
    currentWidth = newWidth;
    currentHeight = newHeight;
  }
  
  return currentCanvas.toDataURL('image/png');
}
