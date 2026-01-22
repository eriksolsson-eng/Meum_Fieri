<script>
  import { appState } from './state.svelte.js';
</script>

<div class="scraper-control">
  <label for="squeegee">Scraper Position</label>
  <input 
    id="squeegee"
    type="range" 
    min="0" 
    max="4" 
    step="1" 
    bind:value={appState.scraperPosition}
    orient="vertical"
  />
  <div class="status-labels">
    <span>Ready</span>
    <span>Layer 1</span>
    <span>Layer 2</span>
    <span>Layer 3</span>
    <span>White</span>
  </div>
</div>

<style>
  .scraper-control {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  input[type="range"] {
    writing-mode: bt-lr; /* Vertical slider support for some browsers */
    appearance: slider-vertical;
    width: 12px;
    height: 300px;
  }
</style>
