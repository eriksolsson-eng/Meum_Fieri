<script>
    export let targetDeflection;
    export let targetElevation;
    export let targetCharge;
    export let roundsToFire;
    export let roundType;
    export let fuzeType;
    export let fuzeDelay;
    export let sightDeflection;
    export let sightElevation;
    export let deflectionGranularity;
    export let elevationGranularity;
    export let totalRoundsAvailable;
    export let roundsFired;
    export let roundInventory;
    export let isLaid;
    export let fireMission;
    export let gameActive;
    export let currentMissionIndex;
    export let startGame;
    
    // Clamp sight elevation input to valid range [0, 700]
    function adjustSightElevation(delta) {
        sightElevation = Math.max(0, Math.min(700, sightElevation + delta));
    }
</script>

<style>
    .mission-section {
        background: rgba(55, 50, 45, 0.95);
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 20px;
        border: 2px solid #4a4438;
    }

    .sight-section {
        background: rgba(50, 55, 60, 0.95);
        border: 2px solid #4a4f5a;
    }

    .section-title {
        font-size: 1.1rem;
        font-weight: bold;
        color: #c4a57b;
        margin-bottom: 15px;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .sight-title {
        color: #9ca3af;
    }

    .input-group {
        margin-bottom: 15px;
    }

    .input-label {
        display: block;
        font-size: 0.9rem;
        color: #c4a57b;
        margin-bottom: 5px;
        font-weight: bold;
    }

    .sight-label {
        color: #9ca3af;
    }

    input {
        width: 100%;
        padding: 10px;
        background: rgba(0, 0, 0, 0.3);
        border: 2px solid #4a4438;
        border-radius: 6px;
        color: #d4d1c5;
        font-size: 1rem;
        font-weight: bold;
    }

    .button-group {
        display: flex;
        gap: 10px;
        margin-top: 8px;
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
    
    .fire-button {
        width: 100%;
        margin-top: 15px;
        padding: 15px;
        font-size: 1.2rem;
        background: linear-gradient(to bottom, #8b4513 0%, #6b3410 100%);
        box-shadow: 0 4px 0 #4a2508;
    }
    
    .fire-button:hover {
        background: linear-gradient(to bottom, #a0522d 0%, #8b4513 100%);
        box-shadow: 0 6px 0 #4a2508;
    }
    
    .fire-button:active {
        box-shadow: 0 2px 0 #4a2508;
    }
    
    .fire-button:disabled {
        background: linear-gradient(to bottom, #4a4438 0%, #3a3428 100%);
        cursor: not-allowed;
        opacity: 0.5;
    }
    
    .ammo-status {
        text-align: center;
        margin-top: 10px;
        padding: 10px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 4px;
        font-weight: bold;
        color: #9ca041;
    }
    
    .charge-buttons {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        margin-top: 8px;
    }
    
    .charge-button {
        padding: 10px;
        background: linear-gradient(to bottom, #4a4f42 0%, #3d4237 100%);
    }
    
    .charge-button.active {
        background: linear-gradient(to bottom, #9ca041 0%, #7a8030 100%);
        color: #1a1a1a;
    }
    
    .round-type-buttons {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        margin-top: 8px;
    }
    
    .round-button {
        padding: 12px 8px;
        font-size: 0.9rem;
    }
    
    .round-button.active {
        background: linear-gradient(to bottom, #c4a57b 0%, #a08860 100%);
        color: #1a1a1a;
    }
    
    .fuze-buttons {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        margin-top: 8px;
    }
    
    .fuze-button {
        padding: 10px 5px;
        font-size: 0.85rem;
    }
    
    .fuze-button.active {
        background: linear-gradient(to bottom, #7a8030 0%, #6a7020 100%);
        color: #e0e0e0;
    }
    
    .timer-input {
        margin-top: 8px;
    }
    
    .inventory-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 5px;
        margin-top: 10px;
        font-size: 0.85rem;
    }
    
    .inventory-item {
        padding: 5px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 3px;
        text-align: center;
    }
    
    .start-game-button {
        width: 100%;
        padding: 15px;
        font-size: 1.2rem;
        margin-bottom: 20px;
        background: linear-gradient(to bottom, #2d7a2d 0%, #1d5a1d 100%);
        box-shadow: 0 4px 0 #0d3a0d;
    }
    
    .start-game-button:hover {
        background: linear-gradient(to bottom, #3d8a3d 0%, #2d7a2d 100%);
        box-shadow: 0 6px 0 #0d3a0d;
    }
    
    .start-game-button:active {
        box-shadow: 0 2px 0 #0d3a0d;
    }
    
    .mission-display {
        text-align: center;
        font-size: 1.1rem;
        font-weight: bold;
        padding: 10px;
        margin-bottom: 15px;
        background: rgba(156, 160, 65, 0.3);
        border-radius: 6px;
        color: #9ca041;
        border: 2px solid #9ca041;
    }
    
    .readonly-field {
        background: rgba(0, 0, 0, 0.5);
        color: #9ca041;
        font-weight: bold;
        text-align: center;
        padding: 10px;
        border-radius: 6px;
        border: 2px solid #4a4438;
    }
</style>

<!-- Start Game Button (only show when not in game) -->
{#if !gameActive}
    <button class="start-game-button" on:click={startGame}>
        START GAME (3 Missions)
    </button>
{:else}
    <div class="mission-display">
        Mission {currentMissionIndex + 1} / 3
    </div>
{/if}

<!-- Fire Mission Input -->
<div class="mission-section">
    <div class="section-title">Fire Mission</div>
    <div class="input-group">
        <label class="input-label">Target Deflection (mils)</label>
        {#if gameActive}
            <div class="readonly-field">{targetDeflection} mils</div>
        {:else}
            <input type="number" bind:value={targetDeflection} step={deflectionGranularity} />
        {/if}
    </div>
    <div class="input-group">
        <label class="input-label">Target Elevation (mils)</label>
        {#if gameActive}
            <div class="readonly-field">{targetElevation} mils</div>
        {:else}
            <input type="number" bind:value={targetElevation} step={elevationGranularity} />
        {/if}
    </div>
    <div class="input-group">
        <label class="input-label">Charge</label>
        {#if gameActive}
            <div class="readonly-field">Charge {targetCharge}</div>
        {:else}
            <div class="charge-buttons">
                {#each [1, 2, 3, 4, 5, 6] as charge}
                    <button 
                        class="charge-button" 
                        class:active={targetCharge === charge}
                        on:click={() => targetCharge = charge}
                    >
                        {charge}
                    </button>
                {/each}
            </div>
        {/if}
    </div>
    <div class="input-group">
        <label class="input-label">Round Type</label>
        {#if gameActive}
            <div class="readonly-field">{roundType}</div>
        {:else}
            <div class="round-type-buttons">
                <button 
                    class="round-button" 
                    class:active={roundType === 'HE'}
                    on:click={() => roundType = 'HE'}
                >
                    HE ({roundInventory.HE})
                </button>
                <button 
                    class="round-button" 
                    class:active={roundType === 'ILLUM'}
                    on:click={() => roundType = 'ILLUM'}
                >
                    ILLUM ({roundInventory.ILLUM})
                </button>
                <button 
                    class="round-button" 
                    class:active={roundType === 'SMOKE'}
                    on:click={() => roundType = 'SMOKE'}
                >
                    SMOKE ({roundInventory.SMOKE})
                </button>
            </div>
        {/if}
    </div>
    
    {#if roundType === 'HE'}
        <div class="input-group">
            <label class="input-label">Fuze Type</label>
            {#if gameActive}
                <div class="readonly-field">{fuzeType.charAt(0).toUpperCase() + fuzeType.slice(1)}</div>
            {:else}
                <div class="fuze-buttons">
                    <button 
                        class="fuze-button" 
                        class:active={fuzeType === 'impact'}
                        on:click={() => fuzeType = 'impact'}
                    >
                        Impact
                    </button>
                    <button 
                        class="fuze-button" 
                        class:active={fuzeType === 'proximity'}
                        on:click={() => fuzeType = 'proximity'}
                    >
                        Proximity
                    </button>
                    <button 
                        class="fuze-button" 
                        class:active={fuzeType === 'delay'}
                        on:click={() => fuzeType = 'delay'}
                    >
                        Delay
                    </button>
                </div>
            {/if}
        </div>
    {:else}
        <div class="input-group">
            <label class="input-label">
                {roundType === 'ILLUM' ? 'Airburst Timer (seconds)' : 'Ground Timer (seconds)'}
            </label>
            {#if gameActive}
                <div class="readonly-field">{fuzeDelay}s</div>
            {:else}
                <input class="timer-input" type="number" bind:value={fuzeDelay} min="1" max="30" step="1" />
            {/if}
        </div>
    {/if}
    
    <div class="input-group">
        <label class="input-label">Rounds to Fire</label>
        {#if gameActive}
            <div class="readonly-field">{roundsToFire} round{roundsToFire > 1 ? 's' : ''}</div>
        {:else}
            <input type="number" bind:value={roundsToFire} min="1" max={roundInventory[roundType]} step="1" />
        {/if}
    </div>
    
    <button class="fire-button" on:click={fireMission}>
        FIRE FOR EFFECT! {isLaid ? '✅' : '⚠️'}
    </button>
    
    <div class="ammo-status">
        Total: {totalRoundsAvailable} | Fired: {roundsFired}
        <div class="inventory-grid">
            <div class="inventory-item">HE: {roundInventory.HE}</div>
            <div class="inventory-item">ILLUM: {roundInventory.ILLUM}</div>
            <div class="inventory-item">SMOKE: {roundInventory.SMOKE}</div>
        </div>
    </div>
</div>

<!-- Sighting Instrument (Creates Parallax) -->
<div class="mission-section sight-section">
    <div class="section-title sight-title">Sighting Instrument (Set Target)</div>
    <div class="input-group">
        <label class="input-label sight-label">Deflection Setting (mils)</label>
        <input type="number" bind:value={sightDeflection} step={deflectionGranularity} />
        <div class="button-group">
            <button on:click={() => sightDeflection -= 10}>-10</button>
            <button on:click={() => sightDeflection -= 1}>-1</button>
            <button on:click={() => sightDeflection += 1}>+1</button>
            <button on:click={() => sightDeflection += 10}>+10</button>
        </div>
    </div>
    <div class="input-group">
        <label class="input-label sight-label">Elevation Setting (mils)</label>
        <input type="number" bind:value={sightElevation} step={elevationGranularity} min="0" max="700" />
        <div class="button-group">
            <button on:click={() => adjustSightElevation(-10)}>-10</button>
            <button on:click={() => adjustSightElevation(-1)}>-1</button>
            <button on:click={() => adjustSightElevation(1)}>+1</button>
            <button on:click={() => adjustSightElevation(10)}>+10</button>
        </div>
    </div>
</div>
