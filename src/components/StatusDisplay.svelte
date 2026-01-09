<script>
    export let sightDeflection;
    export let bipodPosition;
    export let deflectionCrank;
    export let mortarDeflection;
    export let sightElevation;
    export let bipodElevation;
    export let elevationCrank;
    export let crossLevelAngle;
    export let totalElevation;
    export let mortarElevation;
    export let isRegistered;
    export let isLaid;
</script>

<style>
    .status-section {
        background: rgba(45, 50, 42, 0.95); /* Drab military green */
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 20px;
        border: 2px solid #4a4f42;
    }

    .status-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
        margin-bottom: 15px;
    }

    .info-line {
        font-size: 0.95rem;
        padding: 8px;
        background: rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        color: #d4d1c5;
    }

    .status-indicator {
        padding: 12px;
        border-radius: 6px;
        font-weight: bold;
        text-align: center;
        margin-top: 10px;
    }

    .status-registered {
        background: #3d5a3d; /* Swedish woodland green */
        color: #9ca041;
    }

    .status-not-registered {
        background: #5a4232; /* Drab brown */
        color: #c4a57b;
    }

    .status-laid {
        background: #3d5a3d;
        color: #9ca041;
    }

    .status-not-laid {
        background: #5a4232;
        color: #c4a57b;
    }
</style>

<div class="status-section">
    <div class="status-grid">
        <div class="info-line">Sight Deflection: {sightDeflection?.toFixed(1) ?? '0.0'} mils</div>
        <div class="info-line">Bipod Position: {bipodPosition?.toFixed(1) ?? '0.0'} mils</div>
        <div class="info-line">Deflection Crank: {deflectionCrank?.toFixed(1) ?? '0.0'} mils</div>
        <div class="info-line" style="font-weight: bold; color: #9ca041;">Mortar Deflection: {mortarDeflection?.toFixed(1) ?? '0.0'} mils</div>
        <div class="info-line">Sight Elevation: {sightElevation?.toFixed(1) ?? '0.0'} mils</div>
        <div class="info-line">Bipod Elevation: {bipodElevation?.toFixed(1) ?? '0.0'} mils</div>
        <div class="info-line">Elevation Crank: {elevationCrank?.toFixed(1) ?? '0.0'} mils</div>
        <div class="info-line">Cross-Level: {crossLevelAngle?.toFixed(2) ?? '0.00'} mils</div>
        <div class="info-line" style="font-weight: bold; color: #9ca041; grid-column: 1 / -1;">Mortar Elevation: {mortarElevation?.toFixed(1) ?? '0.0'} mils (0-700)</div>
    </div>
    <div class="status-indicator {isRegistered ? 'status-registered' : 'status-not-registered'}">
        REGISTRATION: {isRegistered ? '✓ ALIGNED' : '✗ NOT ALIGNED'}
    </div>
    <div class="status-indicator {isLaid ? 'status-laid' : 'status-not-laid'}">
        FIRE MISSION: {isLaid ? '✓ LAID' : '✗ NOT LAID'}
    </div>
</div>
