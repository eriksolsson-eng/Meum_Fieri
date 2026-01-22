<script>
  import { appState } from './state.svelte.js';

  let dragOver = $state(false);

  function handleDrop(event) {
    event.preventDefault();
    dragOver = false;
    const file = event.dataTransfer?.files[0];
    if (file && file.type.startsWith('image/')) {
      dispatchUpload(file);
    }
  }

  function handleFileSelect(event) {
    const file = event.target.files?.[0];
    if (file) {
      dispatchUpload(file);
    }
  }

  function dispatchUpload(file) {
    // Dispatch custom event for parent to handle WASM processing
    const event = new CustomEvent('upload', { detail: { file } });
    document.dispatchEvent(event);
  }
</script>

<div 
  class="upload-zone"
  class:drag-over={dragOver}
  ondragover={(e) => { e.preventDefault(); dragOver = true; }}
  ondragleave={() => dragOver = false}
  ondrop={handleDrop}
  role="button"
  tabindex="0"
>
  <input 
    type="file" 
    accept="image/*" 
    onchange={handleFileSelect}
    id="file-input"
  />
  <label for="file-input">
    <span class="icon">📁</span>
    <span class="text">Drop image here or click to upload</span>
    <span class="hint">SourceImage → 1024×1024 CanvasTarget</span>
  </label>
</div>

<style>
  .upload-zone {
    border: 2px dashed #666;
    border-radius: 8px;
    padding: 40px 20px;
    text-align: center;
    cursor: pointer;
    transition: border-color 0.2s, background-color 0.2s;
  }

  .upload-zone:hover,
  .upload-zone.drag-over {
    border-color: #4a9eff;
    background-color: rgba(74, 158, 255, 0.1);
  }

  input[type="file"] {
    display: none;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    cursor: pointer;
  }

  .icon {
    font-size: 2rem;
  }

  .text {
    font-size: 1rem;
    color: #ccc;
  }

  .hint {
    font-size: 0.75rem;
    color: #888;
  }
</style>
