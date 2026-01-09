<script>
    // READ-ONLY VISUAL COMPONENT - Lateral Fine (rotating dial)
    export let sightDeflection;  // READ ONLY - mils
    export let onAdjust = null;  // Callback for adjustments: onAdjust(delta)
    
    // LOCKED MOVEMENT MECHANICS
    const FINE_ROTATION_RANGE = 100; // mils per full rotation - LOCKED
    const VISUAL_SCALE = 1.0;
    
    // Calculate rotation for fine numbers dial
    // INVERTED: Increasing sightDeflection rotates counter-clockwise (negative angle)
    // Rotates 360 degrees per FINE_ROTATION_RANGE mils
    $: fineRotationAngle = -(sightDeflection / FINE_ROTATION_RANGE) * 360;
    
    function handleClick(delta) {
        if (onAdjust) onAdjust(delta);
    }
</script>

<style>
    .lateral-fine-wrapper {
        display: inline-block;
        overflow: visible;
    }
    
    .lateral-fine-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: transparent;
        position: relative;
        transform: scale(var(--visual-scale));
        transform-origin: top center;  /* Center origin to prevent overflow */
    }
    
    .lateral-dial-stack {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0;
        position: relative;
    }
    
    .lateral-fine-dial {
        transform: rotate(var(--fine-rotation));
        transition: transform 0.2s ease-out;
    }
    
    .lateral-fine-glare {
        position: absolute;
        left: 0;
        top: 14px;  /* Below indicator (14px tall), aligns with dial top-left */
        z-index: 10;
        pointer-events: none;
    }
    
    /* Invisible button overlay - 4 quadrants */
    .click-zones-quadrant {
        position: absolute;
        top: 14px;  /* Below indicator */
        left: 0;
        width: 100%;
        height: calc(100% - 14px);
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        z-index: 20;
    }
    
    .click-zone {
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

<div class="lateral-fine-wrapper">
    <div class="lateral-fine-container" style="--visual-scale: {VISUAL_SCALE}">
        <div class="lateral-dial-stack">
        <img 
            src="/graphics/sight_lateral_deflection_fine_indicator.png" 
            alt="Lateral Deflection Indicator"
        />
        
        <img 
            class="lateral-fine-dial"
            src="/graphics/sight_lateral_deflection_fine_numbers.png" 
            alt="Lateral Deflection Fine Numbers"
            style="--fine-rotation: {fineRotationAngle}deg"
        />
        
        <img 
            class="lateral-fine-glare"
            src="/graphics/sight_lateral_deflection_fine_glare.png" 
            alt="Glare"
        />
        
        <!-- Invisible click zones: 4 quadrants -->
        <div class="click-zones-quadrant">
            <button class="click-zone" on:click={() => handleClick(-1)} title="-1 mil (Sv: -1 streck)"></button>
            <button class="click-zone" on:click={() => handleClick(1)} title="+1 mil (Sv: +1 streck)"></button>
            <button class="click-zone" on:click={() => handleClick(-5)} title="-5 mils (Sv: -5 streck)"></button>
            <button class="click-zone" on:click={() => handleClick(5)} title="+5 mils (Sv: +5 streck)"></button>
        </div>
        </div>
    </div>
</div>
