<script>
    // READ-ONLY VISUAL COMPONENT - Lateral Coarse (main deflection scale)
    export let sightDeflection;  // READ ONLY - mils
    
    // LOCKED MOVEMENT MECHANICS
    const DEFLECTION_SCROLL_FACTOR = 0.495; // pixels per mil - LOCKED
    
    // Calculate horizontal scroll for deflection numbers scale
    // INVERTED: Increasing sightDeflection moves numbers LEFT (negative offset)
    $: deflectionScrollOffset = -sightDeflection * DEFLECTION_SCROLL_FACTOR;
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
</style>

<div class="lateral-coarse-container">
    <!-- Cylinder masks the scrolling numbers -->
    <div class="cylinder-mask">
        <img 
            class="cylinder-image"
            src="assets/graphics/sight_lateral_coarse_cylinder.png" 
            alt="Lateral Coarse Cylinder"
        />
        
        <img 
            class="numbers-scale"
            src="assets/graphics/sight_lateral_coarse_numbers.png" 
            alt="Lateral Coarse Numbers"
            style="--deflection-scroll: {deflectionScrollOffset}px"
        />
    </div>
</div>
