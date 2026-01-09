<script>
    // READ-ONLY VISUAL COMPONENT - Lateral Coarse (main deflection scale)
    export let sightDeflection;  // READ ONLY - mils
    export let onAdjust = null;  // Callback for adjustments: onAdjust(delta)
    export let onReset = null;   // Callback for reset to 0 mils
    
    const base = import.meta.env.BASE_URL;
    
    // LOCKED MOVEMENT MECHANICS
    const DEFLECTION_SCROLL_FACTOR = 0.324; // pixels per mil - corrected for 1100px container
    
    // Calculate horizontal scroll for deflection numbers scale
    // INVERTED: Increasing sightDeflection moves numbers LEFT (negative offset)
    $: deflectionScrollOffset = -sightDeflection * DEFLECTION_SCROLL_FACTOR;
    
    function handleClick(delta) {
        if (onAdjust) onAdjust(delta);
    }
    
    function handleReset() {
        if (onReset) onReset();
    }
</script>

<style>
    .lateral-coarse-container {
        position: relative;
    }
    
    .cylinder-mask {
        position: relative;
        overflow: hidden; /* Mask numbers to cylinder bounds */
    }
    
    .cylinder-image {
        display: block;
        position: relative;
    }
    
    .numbers-scale {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(calc(-50% + var(--deflection-scroll)));
        transition: transform 0.2s ease-out;
    }
    
    /* Invisible button overlay - top aligned with sight_lateral_coarse_numbers.png */
    .click-zones {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 125px;
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
    
    /* Reset button - 35x35px at center bottom of cylinder */
    .reset-button {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 35px;
        height: 35px;
        cursor: pointer;
        background: transparent;
        border: none;
        padding: 0;
        margin: 0;
        z-index: 20;
    }
    
    .reset-button:hover {
        background: rgba(255, 255, 255, 0.05);
    }
    
    .reset-button:active {
        background: rgba(255, 255, 255, 0.1);
    }
</style>

<div class="lateral-coarse-container">
    <!-- Cylinder masks the scrolling numbers -->
    <div class="cylinder-mask">
        <img 
            class="cylinder-image"
            src="{base}graphics/sight_lateral_coarse_cylinder.png" 
            alt="Lateral Coarse Cylinder"
        />
        
        <img 
            class="numbers-scale"
            src="{base}graphics/sight_lateral_coarse_numbers.png" 
            alt="Lateral Coarse Numbers"
            style="--deflection-scroll: {deflectionScrollOffset}px"
        />
        
        <!-- Invisible click zones: 6 horizontal fields -->
        <div class="click-zones">
            <button class="click-zone" on:click={() => handleClick(-100)} title="-100 mils (Sv: -100 streck)"></button>
            <button class="click-zone" on:click={() => handleClick(-50)} title="-50 mils (Sv: -50 streck)"></button>
            <button class="click-zone" on:click={() => handleClick(-10)} title="-10 mils (Sv: -10 streck)"></button>
            <button class="click-zone" on:click={() => handleClick(10)} title="+10 mils (Sv: +10 streck)"></button>
            <button class="click-zone" on:click={() => handleClick(50)} title="+50 mils (Sv: +50 streck)"></button>
            <button class="click-zone" on:click={() => handleClick(100)} title="+100 mils (Sv: +100 streck)"></button>
        </div>
        
        <!-- Reset button at center bottom of cylinder -->
        <button class="reset-button" on:click={handleReset} title="Reset sight to 0 mils"></button>
    </div>
</div>
