<script>
    export let adjustCrossLevel;
    export let adjustDeflection;
    export let adjustElevation;
    export let adjustRoughDeflection;
    export let adjustRoughElevation;
    export let crankGranularity;
    export let roughDeflectionStep;
</script>

<style>
    .controls-section {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-bottom: 20px;
    }

    .control-group {
        background: rgba(45, 50, 42, 0.95);
        padding: 15px;
        border-radius: 8px;
        border: 2px solid #4a4f42;
        box-shadow: 
            inset 0 1px 2px rgba(0, 0, 0, 0.3),
            0 4px 8px rgba(0, 0, 0, 0.3);
    }

    .control-label {
        font-size: 0.85rem;
        color: #9ca041;
        margin-bottom: 10px;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .button-group {
        display: flex;
        gap: 10px;
    }

    button {
        flex: 1;
        background: linear-gradient(to bottom, #5a6050 0%, #4a4f42 100%);
        color: #d4d1c5;
        border: none;
        padding: 12px;
        border-radius: 6px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.1s;
        box-shadow: 0 4px 0 #3d4237;
        user-select: none;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    button:hover {
        background: linear-gradient(to bottom, #6b7060 0%, #5a6050 100%);
        transform: translateY(-2px);
        box-shadow: 0 6px 0 #3d4237;
    }

    button:active {
        transform: translateY(2px);
        box-shadow: 0 2px 0 #3d4237;
    }
</style>

<!-- Fine Crank Controls -->
<div class="controls-section">
    <div class="control-group">
        <div class="control-label">Cross-Level</div>
        <div class="button-group">
            <button on:click={() => adjustCrossLevel(-crankGranularity)}>LEFT</button>
            <button on:click={() => adjustCrossLevel(crankGranularity)}>RIGHT</button>
        </div>
    </div>

    <div class="control-group">
        <div class="control-label">Deflection Crank</div>
        <div class="button-group">
            <button on:click={() => adjustDeflection(-crankGranularity)}>LEFT</button>
            <button on:click={() => adjustDeflection(crankGranularity)}>RIGHT</button>
        </div>
    </div>

    <div class="control-group">
        <div class="control-label">Elevation Crank</div>
        <div class="button-group">
            <button on:click={() => adjustElevation(-crankGranularity)}>DOWN</button>
            <button on:click={() => adjustElevation(crankGranularity)}>UP</button>
        </div>
    </div>
</div>

<!-- Rough Deflection Control -->
<div class="controls-section">
    <div class="control-group" style="grid-column: 1 / -1;">
        <div class="control-label">Rough Deflection (Bipod Move ±15 mils)</div>
        <div class="button-group">
            <button on:click={() => adjustRoughDeflection(-roughDeflectionStep)}>LEFT 15</button>
            <button on:click={() => adjustRoughDeflection(roughDeflectionStep)}>RIGHT 15</button>
        </div>
    </div>
</div>

<!-- Rough Elevation Control -->
<div class="controls-section">
    <div class="control-group" style="grid-column: 1 / -1;">
        <div class="control-label">Rough Elevation (Bipod Legs)</div>
        <div class="button-group">
            <button on:click={() => adjustRoughElevation(-150)}>-150</button>
            <button on:click={() => adjustRoughElevation(-75)}>-75</button>
            <button on:click={() => adjustRoughElevation(75)}>+75</button>
            <button on:click={() => adjustRoughElevation(150)}>+150</button>
        </div>
    </div>
</div>
