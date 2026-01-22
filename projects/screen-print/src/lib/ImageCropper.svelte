<script>
  import { appState } from './state.svelte.js';
  import { FRAME, lanczosUpscale, clampPosition, generateCroppedCanvas } from './utils/index.js';

  let imageUrl = $state(null);
  let displayUrl = $state(null); // URL for display (may be upscaled)
  let imagePosition = $state({ x: 0, y: 0 });
  let imageScale = $state(1);
  let displaySize = $state({ width: 0, height: 0 }); // Native dimensions of displayed image
  let originalSize = $state({ width: 0, height: 0 }); // Original image dimensions
  let isDragging = $state(false);
  let dragStart = $state({ x: 0, y: 0, imgX: 0, imgY: 0 });
  let fileInput;

  function handleFileSelect(e) {
    const file = e.target.files?.[0] || e.dataTransfer?.files?.[0];
    if (!file || !file.type.startsWith('image/')) return;
    
    if (imageUrl) URL.revokeObjectURL(imageUrl);
    if (displayUrl && displayUrl !== imageUrl) URL.revokeObjectURL(displayUrl);
    
    imageUrl = URL.createObjectURL(file);
    displayUrl = null;
    imagePosition = { x: 0, y: 0 };
    imageScale = 1;
  }

  function onImageLoad(e) {
    const img = e.target;
    const naturalH = img.naturalHeight;
    const naturalW = img.naturalWidth;
    
    // Store original dimensions for crop calculation
    originalSize = { width: naturalW, height: naturalH };
    
    // Calculate scale to fit vertically in frame
    const scaleToFitHeight = FRAME.height / naturalH;
    
    if (scaleToFitHeight > 1) {
      // Image is smaller than frame - upscale it
      const upscaledDataUrl = lanczosUpscale(img, FRAME.height);
      displayUrl = upscaledDataUrl;
      imageScale = 1; // Upscaled image is already at correct size
      
      // Store native dimensions of upscaled image
      const upscaledWidth = Math.round(naturalW * scaleToFitHeight);
      displaySize = { width: upscaledWidth, height: FRAME.height };
      
      // Center horizontally if narrower, else align left edge
      const upscaledHeight = FRAME.height;
      imagePosition = clampPosition(0, 0, upscaledWidth, upscaledHeight);
    } else {
      // Image is larger - scale down to fit height
      displayUrl = imageUrl;
      imageScale = scaleToFitHeight;
      
      // Store NATIVE dimensions (before scale transform)
      displaySize = { width: naturalW, height: naturalH };
      
      // Center horizontally if narrower, else align left edge
      const renderedWidth = naturalW * imageScale;
      const renderedHeight = naturalH * imageScale;
      imagePosition = clampPosition(0, 0, renderedWidth, renderedHeight);
    }
  }

  function startDrag(e) {
    if (!imageUrl) return;
    e.preventDefault();
    isDragging = true;
    dragStart = { 
      x: e.clientX,
      y: e.clientY,
      imgX: imagePosition.x,
      imgY: imagePosition.y
    };
  }

  function onDrag(e) {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    
    const newX = dragStart.imgX + dx;
    const newY = dragStart.imgY + dy;
    
    const scaledWidth = displaySize.width * imageScale;
    const scaledHeight = displaySize.height * imageScale;
    
    imagePosition = clampPosition(newX, newY, scaledWidth, scaledHeight);
  }

  function stopDrag() {
    isDragging = false;
  }

  async function applyCrop() {
    if (!imageUrl) return;
    
    try {
      const blob = await generateCroppedCanvas(imageUrl, imagePosition, originalSize);
      if (appState.croppedImage) URL.revokeObjectURL(appState.croppedImage);
      appState.croppedImage = URL.createObjectURL(blob);
    } catch (err) {
      console.error('Crop failed:', err);
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    handleFileSelect(e);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }
</script>

<div class="image-prep-wrapper">
  <h3>Image Prep</h3>
  
  <div 
    class="prep-frame"
    ondrop={handleDrop}
    ondragover={handleDragOver}
    onmousedown={startDrag}
    onmousemove={onDrag}
    onmouseup={stopDrag}
    onmouseleave={stopDrag}
    role="button"
    tabindex="0"
  >
    {#if displayUrl}
      <img 
        src={displayUrl} 
        alt="Source" 
        class="draggable-image"
        style="transform: translate({imagePosition.x}px, {imagePosition.y}px) scale({imageScale}); cursor: {isDragging ? 'grabbing' : 'grab'};"
        draggable="false"
      />
      <button class="apply-btn" onclick={applyCrop}>
        Apply Crop
      </button>
    {:else if imageUrl}
      <img 
        src={imageUrl} 
        alt="Source" 
        onload={onImageLoad}
        class="draggable-image hidden"
        draggable="false"
      />
    {:else}
      <div 
        class="upload-prompt" 
        onclick={() => fileInput.click()}
        onkeydown={(e) => e.key === 'Enter' && fileInput.click()}
        role="button"
        tabindex="0"
      >
        <span>Drop image or click to upload</span>
      </div>
    {/if}
  </div>
  
  <input 
    type="file" 
    accept="image/*" 
    bind:this={fileInput}
    onchange={handleFileSelect}
    style="display: none;"
  />
</div>

<style>
  .image-prep-wrapper {
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

  .prep-frame {
    position: relative;
    width: 288px;
    height: 384px;
    border: 5px solid #333;
    border-radius: 4px;
    overflow: hidden;
    background: #000;
    user-select: none;
  }

  .draggable-image {
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: top left;
    pointer-events: none;
    user-select: none;
  }
  
  .draggable-image.hidden {
    opacity: 0;
  }

  .upload-prompt {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #444;
    font-size: 0.75rem;
    border: 2px dashed #333;
    border-radius: 4px;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s;
  }

  .upload-prompt:hover {
    border-color: #555;
    color: #666;
  }

  .apply-btn {
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 16px;
    background: #4a9eff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    z-index: 10;
  }

  .apply-btn:hover {
    background: #3a8eef;
  }
</style>
