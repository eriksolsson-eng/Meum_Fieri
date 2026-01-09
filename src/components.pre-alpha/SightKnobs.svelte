<script>
    // ========================================================================
    // READ-ONLY VISUAL COMPONENT - DOES NOT MODIFY AIMING MECHANICS
    // ========================================================================
    // This component ONLY displays the sight knobs graphically.
    // It receives sightElevation and sightDeflection as READ-ONLY props.
    // It does NOT modify these values or dispatch any events.
    // All actual control logic remains in MissionControls.svelte.
    // ========================================================================
    
    import LateralCoarse from './LateralCoarse.svelte';
    import LateralFine from './LateralFine.svelte';
    
    export let sightElevation;  // READ ONLY - 0-700 mils
    export let sightDeflection; // READ ONLY - mils (can be negative)
    
</script>

<style>
    .lateral-knobs-container {
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: flex-start;
        justify-content: space-between;
    }
    
    .lateral-coarse-wrapper {
        align-self: flex-start;
    }
    
    .lateral-fine-wrapper {
        align-self: flex-end;
    }
</style>

<div class="lateral-knobs-container">
    <!-- Lateral Fine (rotating dial) - RIGHT JUSTIFIED -->
    <div class="lateral-fine-wrapper">
        <LateralFine {sightDeflection} />
    </div>
    
    <!-- Lateral Coarse (cylinder with scale) - LEFT JUSTIFIED -->
    <div class="lateral-coarse-wrapper">
        <LateralCoarse {sightDeflection} />
    </div>
</div>
