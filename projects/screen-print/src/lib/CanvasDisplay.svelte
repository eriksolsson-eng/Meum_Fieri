<script>
  import { appState } from './state.svelte.js';
  
  // Each layer has opacity from 0-100% controlled by its scraper
  const whiteOpacity = $derived(appState.layerVisibility.white / 100);
  const colorCOpacity = $derived(appState.layerVisibility.colorC / 100);
  const colorBOpacity = $derived(appState.layerVisibility.colorB / 100);
  const colorAOpacity = $derived(appState.layerVisibility.colorA / 100);
  const rasterOpacity = $derived(appState.layerVisibility.raster / 100);
</script>

<div class="canvas-wrapper">
  <h3>Print</h3>
  
  <div class="print-container">
  <!-- Black substrate background -->
  <div class="substrate"></div>
  
  <!-- z10: White base layer (bottom) -->
  {#if appState.layers.white}
    <img 
      src={appState.layers.white} 
      class="layer" 
      style="z-index: 10; opacity: {whiteOpacity};"
      alt="White base layer" 
    />
  {/if}
  
  <!-- z20: Color C -->
  {#if appState.layers.colorC}
    <img 
      src={appState.layers.colorC} 
      class="layer" 
      style="z-index: 20; opacity: {colorCOpacity};"
      alt="Color C layer" 
    />
  {/if}
  
  <!-- z30: Color B -->
  {#if appState.layers.colorB}
    <img 
      src={appState.layers.colorB} 
      class="layer" 
      style="z-index: 30; opacity: {colorBOpacity};"
      alt="Color B layer" 
    />
  {/if}
  
  <!-- z40: Color A -->
  {#if appState.layers.colorA}
    <img 
      src={appState.layers.colorA} 
      class="layer" 
      style="z-index: 40; opacity: {colorAOpacity};"
      alt="Color A layer" 
    />
  {/if}
  
  <!-- z50: Raster halftone (shadows - top) -->
  {#if appState.layers.raster}
    <img 
      src={appState.layers.raster} 
      class="layer" 
      style="z-index: 50; opacity: {rasterOpacity};"
      alt="Raster shadow layer" 
    />
  {/if}
  </div>
</div>

<style>
  .canvas-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  h3 {
    margin: 0 0 12px 0;
    font-size: 0.75rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .print-container {
    position: relative;
    width: 288px;  /* 3:4 portrait ratio (288:384) */
    height: 384px;
    overflow: hidden;
    border: 5px solid #333;
    border-radius: 4px;
  }
  
  .substrate {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1a1a1a;  /* Dark fabric substrate */
    z-index: 1;
  }

  .layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    /* Normal blend - layers stack with transparency */
  }
</style>
