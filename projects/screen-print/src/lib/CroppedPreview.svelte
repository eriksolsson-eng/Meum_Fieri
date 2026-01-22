<script>
  import { appState } from './state.svelte.js';
</script>

<div class="cropped-preview">
  <h3>Cropped Image</h3>
  
  {#if appState.croppedImage}
    <div class="preview-frame">
      <img src={appState.croppedImage} alt="Cropped source" />
    </div>
  {:else}
    <div class="empty-frame">
      <span>No image cropped</span>
    </div>
  {/if}
</div>

<style>
  .cropped-preview {
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

  .preview-frame {
    width: 288px;  /* Match print area 3:4 ratio */
    height: 384px;
    border: 5px solid #333;
    border-radius: 4px;
    overflow: hidden;
    background: #000;
  }

  .preview-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .empty-frame {
    width: 288px;
    height: 384px;
    border: 2px dashed #333;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #444;
    font-size: 0.75rem;
  }
</style>
