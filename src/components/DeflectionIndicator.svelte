<script>
    export let deflectionCrank;
    export let deflectionCrankPercent;
    export let DEFLECTION_CRANK_MIN;
    export let DEFLECTION_CRANK_MAX;

    // Color zones (10x scale: 250 instead of 25)
    $: isNearLimit = Math.abs(deflectionCrank) >= 230;
    $: isApproachingLimit = Math.abs(deflectionCrank) >= 200 && Math.abs(deflectionCrank) < 230;
    $: isAtLimit = Math.abs(deflectionCrank) >= 250;
</script>

<style>
    .deflection-indicator {
        background: rgba(45, 50, 42, 0.95);
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 20px;
        border: 2px solid #4a4f42;
    }

    .indicator-title {
        font-size: 0.85rem;
        font-weight: bold;
        color: #9ca041;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 12px;
        text-align: center;
    }

    .piston-visual {
        position: relative;
        height: 40px;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 4px;
        overflow: visible;
        border: 1px solid #4a4f42;
    }

    .crossbeam {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        background: linear-gradient(180deg, #5a6050 0%, #3d4237 100%);
        border-radius: 4px;
    }

    .center-mark {
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 2px;
        background: #9ca041;
        transform: translateX(-50%);
        z-index: 2;
    }

    .piston {
        position: absolute;
        top: 50%;
        left: calc(var(--piston-position) * 100%);
        transform: translate(-50%, -50%);
        width: 16px;
        height: 32px;
        background: var(--piston-color);
        border: 2px solid rgba(0, 0, 0, 0.5);
        border-radius: 3px;
        z-index: 3;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        transition: background 0.15s ease-out;
    }

    .limit-markers {
        position: absolute;
        top: -8px;
        left: 0;
        right: 0;
        height: 4px;
        display: flex;
        justify-content: space-between;
    }

    .limit-marker {
        width: 2px;
        height: 8px;
        background: #7a6f5d;
    }

    .readout {
        margin-top: 10px;
        text-align: center;
        font-size: 1.1rem;
        font-weight: bold;
        color: var(--readout-color);
        font-family: 'Courier New', monospace;
    }
</style>

<div class="deflection-indicator">
    <div class="indicator-title">Traverse Beam Position</div>
    
    <div class="piston-visual">
        <div class="crossbeam"></div>
        <div class="center-mark"></div>
        
        <!-- Limit markers at ±250 -->
        <div class="limit-markers">
            <div class="limit-marker"></div>
            <div class="limit-marker"></div>
        </div>
        
        <div 
            class="piston" 
            style="
                --piston-position: {deflectionCrankPercent}; 
                --piston-color: {isAtLimit ? '#8b4513' : isNearLimit ? '#b8860b' : isApproachingLimit ? '#9ca041' : '#6b7560'};
            "
        ></div>
    </div>
    
    <div 
        class="readout"
        style="--readout-color: {isAtLimit ? '#d4a574' : isNearLimit ? '#d4a041' : '#9ca041'};"
    >
        {deflectionCrank >= 0 ? '+' : ''}{deflectionCrank.toFixed(1)} mils
        {#if isAtLimit}
            (LIMIT!)
        {:else if isNearLimit}
            (Near Limit)
        {/if}
    </div>
</div>
