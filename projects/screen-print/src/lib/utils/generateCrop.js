import { FRAME, OUTPUT } from './constants.js';

/**
 * Generate a cropped canvas from source image based on display position
 * 
 * @param {string} imageUrl - Source image URL
 * @param {{ x: number, y: number }} position - Display position offset
 * @param {{ width: number, height: number }} originalSize - Original image dimensions
 * @returns {Promise<Blob>} PNG blob of cropped output
 */
export function generateCroppedCanvas(imageUrl, position, originalSize) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = OUTPUT.width;
      canvas.height = OUTPUT.height;
      const ctx = canvas.getContext('2d');
      
      // Calculate the scale from display to original
      const displayToOriginal = originalSize.height / FRAME.height;
      
      // Map display position back to original image coordinates
      const srcX = -position.x * displayToOriginal;
      const srcY = -position.y * displayToOriginal;
      
      // Calculate how the original maps to output
      const outputScale = OUTPUT.height / FRAME.height;
      const scaleFactor = outputScale / displayToOriginal;
      const drawWidth = originalSize.width * scaleFactor;
      const drawHeight = originalSize.height * scaleFactor;
      const drawX = -srcX * scaleFactor;
      const drawY = -srcY * scaleFactor;
      
      // Fill background and draw image
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, OUTPUT.width, OUTPUT.height);
      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
      
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Failed to generate blob'));
        }
      }, 'image/png');
    };
    
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = imageUrl;
  });
}
