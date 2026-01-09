<script>
    // READ-ONLY VISUAL COMPONENT - Coarse Elevation (100 scale)
    export let sightElevation;  // READ ONLY - 0-700 mils
    
    // LOCKED MOVEMENT MECHANICS
    const INDICATOR_MOVEMENT_FACTOR = 2.33; // LOCKED - Perfect calibration
    const VISUAL_SCALE = 1.0;
    
    // Calculate vertical position for indicator
    $: indicatorVerticalOffset = -((sightElevation - 350) / 700) * 100 / INDICATOR_MOVEMENT_FACTOR;
</script>

<style>
    .elevation-coarse-container {
        background: transparent;
        position: relative;
        transform: scale(var(--visual-scale));
        transform-origin: top center;
    }
    
    .elevation-scale-container {
        position: relative;
        overflow: hidden; /* Clip indicator to scale bounds */
    }
    
    .elevation-scale-container img {
        display: block;
    }
    
    .elevation-indicator {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(calc(-50% + var(--indicator-offset)));
        z-index: 10;
        transition: transform 0.2s ease-out;
    }
</style>

<div class="elevation-coarse-container" style="--visual-scale: {VISUAL_SCALE}">
    <div class="elevation-scale-container">
        <img 
            src="assets/graphics/sight_elevation_deflection_100_scale.png" 
            alt="Elevation Scale 0-700"
        />
        
        <img 
            class="elevation-indicator"
            src="assets/graphics/sight_elevation_deflection_100_indicator.png" 
            alt="Elevation Indicator"
            style="--indicator-offset: {indicatorVerticalOffset}%"
        />
    </div>
</div>
