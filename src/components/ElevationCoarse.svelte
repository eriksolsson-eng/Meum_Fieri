<script>
    // READ-ONLY VISUAL COMPONENT - Coarse Elevation (100 scale)
    export let sightElevation;  // READ ONLY - 0-700 mils
    export let onAdjust = null;  // Callback for adjustments: onAdjust(delta)
    
    // LOCKED MOVEMENT MECHANICS
    const INDICATOR_MOVEMENT_FACTOR = 2.33; // LOCKED - Perfect calibration
    const VISUAL_SCALE = 1.0;
    
    // Calculate vertical position for indicator
    $: indicatorVerticalOffset = -((sightElevation - 350) / 700) * 100 / INDICATOR_MOVEMENT_FACTOR;
    
    function handleClick(delta) {
        if (onAdjust) onAdjust(delta);
    }
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
    
    /* Invisible button overlay - 6 vertical fields */
    .click-zones-vertical {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
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

<div class="elevation-coarse-container" style="--visual-scale: {VISUAL_SCALE}">
    <div class="elevation-scale-container">
        <img 
            src="/graphics/sight_elevation_deflection_100_scale.png" 
            alt="Elevation Scale 0-700"
        />
        
        <img 
            class="elevation-indicator"
            src="/graphics/sight_elevation_deflection_100_indicator.png" 
            alt="Elevation Indicator"
            style="--indicator-offset: {indicatorVerticalOffset}%"
        />
        
        <!-- Invisible click zones: 6 vertical fields (top to bottom) -->
        <div class="click-zones-vertical">
            <button class="click-zone" on:click={() => handleClick(100)} title="+100 mils (Sv: +100 streck)"></button>
            <button class="click-zone" on:click={() => handleClick(50)} title="+50 mils (Sv: +50 streck)"></button>
            <button class="click-zone" on:click={() => handleClick(10)} title="+10 mils (Sv: +10 streck)"></button>
            <button class="click-zone" on:click={() => handleClick(-10)} title="-10 mils (Sv: -10 streck)"></button>
            <button class="click-zone" on:click={() => handleClick(-50)} title="-50 mils (Sv: -50 streck)"></button>
            <button class="click-zone" on:click={() => handleClick(-100)} title="-100 mils (Sv: -100 streck)"></button>
        </div>
    </div>
</div>
