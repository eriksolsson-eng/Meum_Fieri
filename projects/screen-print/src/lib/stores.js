import { writable } from 'svelte/store';

// Dictionary mapping for the AI logic
export const ScraperState = writable(0); // 0 (blank) to 4 (full print)
export const InkLayers = writable({
    A: null, // Blob URL or ImageData for InkLayerA
    B: null, // Blob URL or ImageData for InkLayerB
    C: null, // Blob URL or InkLayerC
    White: null // Blob URL for WhiteLayer
});
export const SelectedPalette = writable({
    colorA: '#ff0000',
    colorB: '#00ff00',
    colorC: '#0000ff'
});
