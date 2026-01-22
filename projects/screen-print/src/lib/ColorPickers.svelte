<script>
  import { appState } from './state.svelte.js';
</script>

<div class="color-pickers">
  <h3>Ink Palette</h3>
  
  <div class="picker-row">
    <label for="colorA">
      <span class="swatch" style="background: {appState.palette.colorA}"></span>
      InkLayerA
    </label>
    <input 
      type="color" 
      id="colorA"
      bind:value={appState.palette.colorA}
    />
  </div>

  <div class="picker-row">
    <label for="colorB">
      <span class="swatch" style="background: {appState.palette.colorB}"></span>
      InkLayerB
    </label>
    <input 
      type="color" 
      id="colorB"
      bind:value={appState.palette.colorB}
    />
  </div>

  <div class="picker-row">
    <label for="colorC">
      <span class="swatch" style="background: {appState.palette.colorC}"></span>
      InkLayerC
    </label>
    <input 
      type="color" 
      id="colorC"
      bind:value={appState.palette.colorC}
    />
  </div>
</div>

<style>
  .color-pickers {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    background: #1a1a1a;
    border-radius: 8px;
  }

  h3 {
    margin: 0 0 8px 0;
    font-size: 0.875rem;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .picker-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.875rem;
    color: #ccc;
  }

  .swatch {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid #444;
  }

  input[type="color"] {
    width: 40px;
    height: 30px;
    padding: 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background: transparent;
  }

  input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 2px;
  }

  input[type="color"]::-webkit-color-swatch {
    border-radius: 3px;
    border: 1px solid #444;
  }
</style>
