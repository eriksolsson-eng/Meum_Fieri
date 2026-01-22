<script>
  import init, { process_image } from './wasm/screen_print_simulator_core.js';
  
  import LayerScrapers from './lib/LayerScrapers.svelte';
  import CanvasDisplay from './lib/CanvasDisplay.svelte';
  import ColorPickers from './lib/ColorPickers.svelte';
  import ImageCropper from './lib/ImageCropper.svelte';
  import CroppedPreview from './lib/CroppedPreview.svelte';
  import { appState } from './lib/state.svelte.js';

  let wasmReady = $state(false);
  let processing = $state(false);

  // Initialize WASM on load
  $effect(() => {
    init().then(() => {
      wasmReady = true;
    });
  });

  async function processImage() {
    if (!appState.croppedImage || !wasmReady) return;
    
    processing = true;
    
    try {
      // Load cropped image
      const img = new Image();
      img.src = appState.croppedImage;
      await new Promise(resolve => img.onload = resolve);
      
      // Get pixel data
      const canvas = document.createElement('canvas');
      canvas.width = 768;  // 3:4 ratio
      canvas.height = 1024;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, 768, 1024);
      const imageData = ctx.getImageData(0, 0, 768, 1024);
      
      // Process via WASM (5 layers: raster, colorA, colorB, colorC, white)
      const layers = process_image(
        imageData.data,
        768,
        1024,
        appState.palette.colorA,
        appState.palette.colorB,
        appState.palette.colorC,
        appState.halftone.dotSize
      );
      
      // Convert layer data to image URLs
      const layerUrls = layers.map(layerData => {
        const layerCanvas = document.createElement('canvas');
        layerCanvas.width = 768;
        layerCanvas.height = 1024;
        const layerCtx = layerCanvas.getContext('2d');
        const layerImageData = new ImageData(new Uint8ClampedArray(layerData), 768, 1024);
        layerCtx.putImageData(layerImageData, 0, 0);
        return layerCanvas.toDataURL('image/png');
      });
      
      // Clean up old URLs (data URLs don't need revoking, but safe to keep)
      
      // Update state with 5 layers
      appState.layers = {
        raster: layerUrls[0],
        colorA: layerUrls[1],
        colorB: layerUrls[2],
        colorC: layerUrls[3],
        white: layerUrls[4]
      };
      
      // Reset all scrapers to 0
      appState.layerVisibility = {
        raster: 0,
        colorA: 0,
        colorB: 0,
        colorC: 0,
        white: 0
      };
      
    } catch (err) {
      console.error('Processing failed:', err);
    } finally {
      processing = false;
    }
  }
  
  const canProcess = $derived(wasmReady && appState.croppedImage && !processing);
</script>

<main oncontextmenu={(e) => e.preventDefault()}>
  <h1>Screen Print Simulator</h1>
  
  {#if !wasmReady}
    <div class="notice">Loading processing engine...</div>
  {/if}

  <div class="grid-layout">
    <!-- Row 1: Images -->
    <ImageCropper />
    <CroppedPreview />
    <CanvasDisplay />
    
    <!-- Row 2: Controls -->
    <div class="controls-cell">
      <ColorPickers />
      <button 
        class="process-btn" 
        onclick={processImage}
        disabled={!canProcess}
      >
        {processing ? 'Processing...' : 'Create Print'}
      </button>
    </div>
    <div class="scrapers-cell">
      <LayerScrapers />
    </div>
  </div>
</main>

<style>
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: system-ui, sans-serif;
    color: #fff;
    background: #0a0a0a;
    min-height: 100vh;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
  }

  .notice {
    background: #332200;
    border: 1px solid #665500;
    color: #ffcc00;
    padding: 10px 16px;
    border-radius: 6px;
    text-align: center;
    margin-bottom: 20px;
    font-size: 0.875rem;
  }

  .grid-layout {
    display: grid;
    grid-template-columns: 288px 288px 288px;
    grid-template-rows: auto auto;
    gap: 20px;
  }
  
  .controls-cell {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .scrapers-cell {
    grid-column: 2 / 4;
  }

  .process-btn {
    padding: 14px;
    background: #22aa44;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }

  .process-btn:hover:not(:disabled) {
    background: #119933;
  }

  .process-btn:disabled {
    background: #333;
    color: #666;
    cursor: not-allowed;
  }

</style>
