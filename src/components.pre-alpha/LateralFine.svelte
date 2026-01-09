<script>
    // READ-ONLY VISUAL COMPONENT - Lateral Fine (rotating dial)
    export let sightDeflection;  // READ ONLY - mils
    
    // LOCKED MOVEMENT MECHANICS
    const FINE_ROTATION_RANGE = 100; // mils per full rotation - LOCKED
    const VISUAL_SCALE = 1.4; // LOCKED - DO NOT MODIFY
    
    // Calculate rotation for fine numbers dial
    // INVERTED: Increasing sightDeflection rotates counter-clockwise (negative angle)
    // Rotates 360 degrees per FINE_ROTATION_RANGE mils
    $: fineRotationAngle = -(sightDeflection / FINE_ROTATION_RANGE) * 360;
</script>

<style>
    .lateral-fine-wrapper {
        /* Wrapper contains scaled content */
        display: inline-block;
        width: 420px;  /* 300px × 1.4 - EXACT SCALED SIZE - LOCKED */
        height: 476px; /* (40px + 300px) × 1.4 - EXACT SCALED SIZE - LOCKED */
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
</style>

<div class="lateral-fine-wrapper">
    <div class="lateral-fine-container" style="--visual-scale: {VISUAL_SCALE}">
        <div class="lateral-dial-stack">
        <img 
            src="assets/graphics/sight_lateral_deflection_fine_indicator.png" 
            alt="Lateral Deflection Indicator"
            style="width: auto; height: 40px;"
        />
        
        <img 
            class="lateral-fine-dial"
            src="assets/graphics/sight_lateral_deflection_fine_numbers.png" 
            alt="Lateral Deflection Fine Numbers"
            style="width: 300px; height: 300px; --fine-rotation: {fineRotationAngle}deg"
        />
        </div>
    </div>
</div>
