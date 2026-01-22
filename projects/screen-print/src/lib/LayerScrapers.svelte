<script>
  import { appState } from './state.svelte.js';
  
  const layers = [
    { key: 'white', label: 'White Base', z: 10, color: '#ffffff' },
    { key: 'colorC', label: 'Color C', z: 20, color: null },
    { key: 'colorB', label: 'Color B', z: 30, color: null },
    { key: 'colorA', label: 'Color A', z: 40, color: null },
    { key: 'raster', label: 'Raster (Shadows)', z: 50, color: '#000000' }
  ];
  
  // Get palette color for dynamic labels
  function getColor(key) {
    if (key === 'colorA') return appState.palette.colorA;
    if (key === 'colorB') return appState.palette.colorB;
    if (key === 'colorC') return appState.palette.colorC;
    return null;
  }
</script>

<div class="scrapers-panel">
  <h3>Layer Scrapers</h3>
  
  {#each layers as layer}
    {@const paletteColor = getColor(layer.key)}
    <div class="scraper-row">
      <div class="layer-info">
        <span 
          class="color-dot" 
          style="background: {paletteColor || layer.color}"
        ></span>
        <span class="layer-label">{layer.label}</span>
        <span class="z-index">z{layer.z}</span>
      </div>
      <input 
        type="range" 
        min="0" 
        max="100" 
        bind:value={appState.layerVisibility[layer.key]}
        disabled={!appState.layers[layer.key]}
      />
      <span class="value">{appState.layerVisibility[layer.key]}%</span>
    </div>
  {/each}
</div>

<style>
  .scrapers-panel {
    padding: 1rem;
    background: #1a1a1a;
    border-radius: 8px;
    min-width: 280px;
  }
  
  h3 {
    margin: 0 0 1rem 0;
    color: #ccc;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .scraper-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    padding: 0.5rem;
    background: #222;
    border-radius: 4px;
  }
  
  .layer-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 140px;
  }
  
  .color-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid #444;
  }
  
  .layer-label {
    color: #ddd;
    font-size: 0.85rem;
  }
  
  .z-index {
    color: #666;
    font-size: 0.7rem;
    font-family: monospace;
  }
  
  input[type="range"] {
    flex: 1;
    accent-color: #888;
  }
  
  input[type="range"]:disabled {
    opacity: 0.3;
  }
  
  .value {
    color: #888;
    font-size: 0.8rem;
    font-family: monospace;
    min-width: 40px;
    text-align: right;
  }
</style>
