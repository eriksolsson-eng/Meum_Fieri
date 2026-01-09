/**
 * Formatting utility functions for mortar simulator
 * Extracted from App.svelte for maintainability
 */

/**
 * Format elapsed time as MM:SS.t (minutes, seconds, tenths)
 * @param {number} totalSeconds - Total seconds elapsed
 * @returns {string} Formatted time string
 */
export function formatElapsedTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const tenths = Math.floor((totalSeconds % 1) * 10);
    return `${minutes}:${seconds.toString().padStart(2, '0')}.${tenths}`;
}

/**
 * Format a mil value with specified decimal precision
 * Handles null/undefined safely
 * @param {number|null|undefined} value - The value to format
 * @param {number} decimals - Number of decimal places (default 1)
 * @returns {string} Formatted value or fallback
 */
export function formatMils(value, decimals = 1) {
    if (value == null || isNaN(value)) {
        return decimals === 0 ? '0' : '0.' + '0'.repeat(decimals);
    }
    return value.toFixed(decimals);
}

/**
 * Format a mil value with +/- sign prefix
 * @param {number} value - The value to format
 * @param {number} decimals - Number of decimal places (default 1)
 * @returns {string} Formatted value with sign
 */
export function formatSignedMils(value, decimals = 1) {
    const prefix = value >= 0 ? '+' : '';
    return prefix + formatMils(value, decimals);
}

/**
 * Format a number as integer (0 decimals)
 * @param {number|null|undefined} value - The value to format
 * @returns {string} Formatted integer string
 */
export function formatInt(value) {
    return formatMils(value, 0);
}
