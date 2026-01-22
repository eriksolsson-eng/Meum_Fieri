import { FRAME } from './constants.js';

/**
 * Clamp image position so it covers the entire frame (no black edges showing)
 * 
 * @param {number} x - Proposed x position
 * @param {number} y - Proposed y position
 * @param {number} scaledWidth - Rendered image width
 * @param {number} scaledHeight - Rendered image height
 * @returns {{ x: number, y: number }} Clamped position
 */
export function clampPosition(x, y, scaledWidth, scaledHeight) {
  let clampedX, clampedY;
  
  // Horizontal clamping
  if (scaledWidth > FRAME.width) {
    // Image wider than frame: allow panning, but keep edges inside
    const minX = FRAME.width - scaledWidth;
    const maxX = 0;
    clampedX = Math.max(minX, Math.min(maxX, x));
  } else {
    // Image narrower than frame: center it
    clampedX = (FRAME.width - scaledWidth) / 2;
  }
  
  // Vertical clamping
  if (scaledHeight > FRAME.height) {
    // Image taller than frame: allow panning, but keep edges inside
    const minY = FRAME.height - scaledHeight;
    const maxY = 0;
    clampedY = Math.max(minY, Math.min(maxY, y));
  } else {
    // Image shorter than frame: center it
    clampedY = (FRAME.height - scaledHeight) / 2;
  }
  
  return { x: clampedX, y: clampedY };
}
