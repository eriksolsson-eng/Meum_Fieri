<script>
    // READ-ONLY VISUAL COMPONENT
    export let sightElevation;  // READ ONLY - 0-700 mils
    
    // ========================================================================
    // LOCKED MOVEMENT MECHANICS - DO NOT MODIFY
    // ========================================================================
    // This value is calibrated to the physical relationship between the 
    // indicator and scale images. Changing this will break the visual accuracy.
    const INDICATOR_MOVEMENT_FACTOR = 2.33; // LOCKED - Perfect calibration
    const FINE_SCALE_PIXELS_PER_MIL = 27; // Pixels per mil for fine scale scrolling
    // ========================================================================
    
    // ========================================================================
    // VISUAL SCALING - ADJUST THESE TO RESIZE THE ENTIRE INTERFACE
    // ========================================================================
    const VISUAL_SCALE = 1.0; // Change this to scale all graphics together
    // ========================================================================
    
    // Calculate vertical position for indicator (0-700 range)
    // Movement is locked, but scales with VISUAL_SCALE
    $: indicatorVerticalOffset = -((sightElevation - 350) / 700) * 100 / INDICATOR_MOVEMENT_FACTOR;
    
    // Calculate horizontal scroll for fine numbers scale
    // Apply modulo for seamless looping every 100 mils
    $: fineValue = sightElevation % 100;
    $: fineScrollOffset = -(fineValue - 50) * FINE_SCALE_PIXELS_PER_MIL; // Negative = reversed direction
</script>

<style>
    .elevation-interface {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0;
        background: transparent;
        position: relative;
        transform: scale(var(--visual-scale));
        transform-origin: top center;
    }
    
    .elevation-scale-container {
        position: relative;
        margin-bottom: 20px; /* Padding beneath scale */
        display: flex;
        justify-content: center;
    }
    
    .elevation-scale-container img {
        display: block;
    }
    
    .elevation-indicator {
        position: absolute;
        left: 0; /* No padding, aligned to left edge */
        top: 50%;
        transform: translateY(calc(-50% + var(--indicator-offset)));
        z-index: 10;
        transition: transform 0.2s ease-out;
    }
    
    .fine-cylinder-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .fine-numbers-scale {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(calc(-50% + var(--fine-scroll)));
        z-index: 5;
        transition: transform 0.2s ease-out;
    }
    
    .fine-indicator {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10; /* In front of cylinder and scale */
    }
    
    /* Ensure fine cylinder is also centered for consistent alignment */
    .fine-cylinder-container img {
        display: block;
    }
</style>

<!-- Elevation Interface -->
<div class="elevation-interface" style="--visual-scale: {VISUAL_SCALE}">
    <!-- Coarse Elevation Group (100 scale) -->
    <div class="elevation-scale-container">
        <!-- Coarse scale (0-700) -->
        <img 
            src="assets/graphics/sight_elevation_deflection_100_scale.png" 
            alt="Elevation Scale 0-700"
        />
        
        <!-- Indicator (left edge, vertically centered) -->
        <img 
            class="elevation-indicator"
            src="assets/graphics/sight_elevation_deflection_100_indicator.png" 
            alt="Elevation Indicator"
            style="--indicator-offset: {indicatorVerticalOffset}%"
        />
    </div>
    
    <!-- Fine Elevation Group (fine cylinder, scale, indicator) -->
    <div class="fine-cylinder-container">
        <!-- Fine cylinder -->
        <img 
            src="assets/graphics/sight_elevation_deflection_fine_cylinder.png" 
            alt="Fine Cylinder"
        />
        
        <!-- Fine numbers scale (scrolls linearly with elevation) -->
        <img 
            class="fine-numbers-scale"
            src="assets/graphics/sight_elevation_deflection_fine_numbers_scale.png" 
            alt="Fine Numbers Scale"
            style="--fine-scroll: {fineScrollOffset}px"
        />
        
        <!-- Fine indicator (centered at bottom, in front) -->
        <img 
            class="fine-indicator"
            src="assets/graphics/sight_elevation_deflection_fine_indicator.png" 
            alt="Fine Indicator"
        />
    </div>
</div>
