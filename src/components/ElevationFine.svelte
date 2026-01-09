<script>
    // READ-ONLY VISUAL COMPONENT - Fine Elevation
    export let sightElevation;  // READ ONLY - 0-700 mils
    export let onAdjust = null;  // Callback for adjustments: onAdjust(delta)
    
    // LOCKED MOVEMENT MECHANICS
    const FINE_SCALE_PIXELS_PER_MIL = 9.2; // Pixels per mil for fine scale scrolling
    const VISUAL_SCALE = 1.0;
    
    // Calculate horizontal scroll for fine numbers scale
    $: fineValue = sightElevation % 100;
    $: fineScrollOffset = -(fineValue - 50) * FINE_SCALE_PIXELS_PER_MIL;
    
    function handleClick(delta) {
        if (onAdjust) onAdjust(delta);
    }
</script>

<style>
    .elevation-fine-container {
        background: transparent;
        position: relative;
        transform: scale(var(--visual-scale));
        transform-origin: top left;
    }
    
    .fine-cylinder-container {
        position: relative;
    }
    
    .fine-cylinder-mask {
        position: relative;
        overflow: hidden;  /* Mask numbers to cylinder bounds */
        z-index: 1;
    }
    
    .fine-numbers-scale {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(calc(-50% + var(--fine-scroll)));
        transition: transform 0.2s ease-out;
    }
    
    .fine-indicator {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
    }
    
    .fine-cylinder-container img {
        display: block;
    }
    
    /* Invisible button overlay - 4 horizontal fields */
    .click-zones {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        z-index: 20;
    }
    
    .click-zone {
        flex: 1;
        cursor: pointer;
        background: transparent;
        border: none;
        padding: 0;
        margin: 0;
    }
    
    .click-zone:hover {
        background: rgba(255, 255, 255, 0.05);
    }
    
    .click-zone:active {
        background: rgba(255, 255, 255, 0.1);
    }
</style>

<div class="elevation-fine-container" style="--visual-scale: {VISUAL_SCALE}">
    <div class="fine-cylinder-container">
        <!-- Cylinder masks numbers -->
        <div class="fine-cylinder-mask">
            <img 
                src="/graphics/sight_elevation_deflection_fine_cylinder.png" 
                alt="Fine Cylinder"
            />
            
            <img 
                class="fine-numbers-scale"
                src="/graphics/sight_elevation_deflection_fine_numbers_scale.png" 
                alt="Fine Numbers Scale"
                style="--fine-scroll: {fineScrollOffset}px"
            />
        </div>
        
        <!-- Indicator on top -->
        <img 
            class="fine-indicator"
            src="/graphics/sight_elevation_deflection_fine_indicator.png" 
            alt="Fine Indicator"
        />
        
        <!-- Invisible click zones: 4 horizontal fields (outside mask for proper z-index) -->
        <div class="click-zones">
            <button class="click-zone" on:click={() => handleClick(-5)} title="-5 mils (Sv: -5 streck)"></button>
            <button class="click-zone" on:click={() => handleClick(-1)} title="-1 mil (Sv: -1 streck)"></button>
            <button class="click-zone" on:click={() => handleClick(1)} title="+1 mil (Sv: +1 streck)"></button>
            <button class="click-zone" on:click={() => handleClick(5)} title="+5 mils (Sv: +5 streck)"></button>
        </div>
    </div>
</div>
