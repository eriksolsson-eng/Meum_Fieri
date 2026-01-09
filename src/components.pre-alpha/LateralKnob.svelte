<script>
    // READ-ONLY VISUAL COMPONENT
    export let sightDeflection;  // READ ONLY - mils (can be negative)
    
    // ========================================================================
    // LOCKED MOVEMENT MECHANICS - DO NOT MODIFY
    // ========================================================================
    // These values are calibrated to the physical relationship between the 
    // graphics. Changing these will break the visual accuracy.
    const DEFLECTION_SCROLL_FACTOR = 2; // pixels per mil - LOCKED
    const FINE_ROTATION_RANGE = 10; // mils per full rotation - LOCKED
    // ========================================================================
    
    // ========================================================================
    // VISUAL SCALING - ADJUST THESE TO RESIZE THE ENTIRE INTERFACE
    // ========================================================================
    const VISUAL_SCALE = 1.0; // Change this to scale all graphics together
    // ========================================================================
    
    // Calculate horizontal scroll for deflection numbers scale
    // Movement is locked, but scales with VISUAL_SCALE
    $: deflectionScrollOffset = sightDeflection * DEFLECTION_SCROLL_FACTOR;
    
    // Calculate rotation for fine numbers dial (circular knob)
    $: fineDeflectionValue = ((sightDeflection % FINE_ROTATION_RANGE) + FINE_ROTATION_RANGE) % FINE_ROTATION_RANGE;
    $: fineRotationAngle = (fineDeflectionValue / FINE_ROTATION_RANGE) * 360; // degrees
</script>

<style>
    .lateral-interface {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 20px;
        background: transparent;
        transform: scale(var(--visual-scale));
        transform-origin: top center;
    }
    
    .lateral-dial-stack {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0;
        position: relative;
        z-index: 3; /* Fine numbers dial on top */
    }
    
    .lateral-fine-dial {
        transform: rotate(var(--fine-rotation));
        transition: transform 0.2s ease-out;
    }
    
    .cylinder-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .deflection-scale {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(calc(-50% + var(--deflection-scroll)));
        z-index: 2; /* Between fine numbers (3) and cylinder (1) */
        transition: transform 0.2s ease-out;
    }
    
    .cylinder-front {
        position: relative;
        z-index: 1; /* Cylinder at the back */
    }
</style>

<!-- Lateral Interface -->
<div class="lateral-interface" style="--visual-scale: {VISUAL_SCALE}">
    <!-- Left: Lateral dial with indicator on top -->
    <div class="lateral-dial-stack">
        <!-- Indicator (above) -->
        <img 
            src="assets/graphics/sight_lateral_deflection_fine_indicator.png" 
            alt="Lateral Deflection Indicator"
            style="width: auto; height: 40px;"
        />
        
        <!-- Lateral fine numbers (circular) -->
        <img 
            class="lateral-fine-dial"
            src="assets/graphics/sight_lateral_deflection_fine_numbers.png" 
            alt="Lateral Deflection Fine Numbers"
            style="width: 300px; height: 300px; --fine-rotation: {fineRotationAngle}deg"
        />
    </div>
    
    <!-- Right: Lateral cylinder with scale behind it -->
    <div class="cylinder-container">
        <!-- Deflection numbers scale (behind, will slide later) -->
        <img 
            class="deflection-scale"
            src="assets/graphics/sight_lateral_deflection_numbers.png" 
            alt="Deflection Scale Numbers"
            style="width: auto; height: 100px; --deflection-scroll: {deflectionScrollOffset}px"
        />
        
        <!-- Lateral cylinder (in front) -->
        <img 
            class="cylinder-front"
            src="assets/graphics/sight_lateral_deflection_cylinder.png" 
            alt="Lateral Deflection Cylinder"
            style="width: auto; height: 100px;"
        />
    </div>
</div>
