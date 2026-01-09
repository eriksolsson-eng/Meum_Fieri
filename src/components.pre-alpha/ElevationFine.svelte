<script>
    // READ-ONLY VISUAL COMPONENT - Fine Elevation
    export let sightElevation;  // READ ONLY - 0-700 mils
    
    // LOCKED MOVEMENT MECHANICS
    const FINE_SCALE_PIXELS_PER_MIL = 27; // Pixels per mil for fine scale scrolling
    const VISUAL_SCALE = 0.6; // LOCKED - DO NOT MODIFY
    
    // Calculate horizontal scroll for fine numbers scale
    $: fineValue = sightElevation % 100;
    $: fineScrollOffset = -(fineValue - 50) * FINE_SCALE_PIXELS_PER_MIL;
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
</style>

<div class="elevation-fine-container" style="--visual-scale: {VISUAL_SCALE}">
    <div class="fine-cylinder-container">
        <!-- Cylinder masks numbers -->
        <div class="fine-cylinder-mask">
            <img 
                src="assets/graphics/sight_elevation_deflection_fine_cylinder.png" 
                alt="Fine Cylinder"
            />
            
            <img 
                class="fine-numbers-scale"
                src="assets/graphics/sight_elevation_deflection_fine_numbers_scale.png" 
                alt="Fine Numbers Scale"
                style="--fine-scroll: {fineScrollOffset}px"
            />
        </div>
        
        <!-- Indicator on top -->
        <img 
            class="fine-indicator"
            src="assets/graphics/sight_elevation_deflection_fine_indicator.png" 
            alt="Fine Indicator"
        />
    </div>
</div>
