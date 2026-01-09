<script>
    export let backgroundMovement;
    export let frontStickMovement;
    export let backStickMovement;
    export let backgroundElevationShift;
    export let backStickElevationShift;
    export let frontStickElevationShift;
</script>

<style>
    .sight-view {
        position: relative;
        width: 1100px;
        height: 1100px;
        background: #000;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.9);
    }

    .background-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 50%;
        transform-origin: center center;
        z-index: 10;
    }

    .background-layer img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .sight-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 50%;
        transition: transform 0.05s ease-out;
        pointer-events: none;
        z-index: 40;
    }

    .sight-overlay img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .stick-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 50%;
        transition: transform 0.15s ease-out;
        pointer-events: none;
    }

    .stick-layer img {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
    }

    .front-stick {
        z-index: 30;
    }

    .back-stick {
        z-index: 20;
    }
</style>

<div class="sight-view">
    <!-- Background Layer - moves most with elevation -->
    <div class="background-layer" style="transform: translate(calc(-50% + {backgroundMovement}px), {backgroundElevationShift}px);">
        <img src="/graphics/background.jpg" alt="Terrain Background" />
    </div>

    <!-- Sight Reticle (Always centered - NO elevation movement) -->
    <div class="sight-overlay" style="transform: translate(-50%, 0);">
        <img src="/graphics/sight.png" alt="Mortar Sight Reticle" />
    </div>

    <!-- Front Stick (Closer) - moves with background + deflection parallax + least elevation parallax -->
    <div class="stick-layer front-stick" style="transform: translate(calc(-50% + {frontStickMovement}px), {frontStickElevationShift}px);">
        <img src="/graphics/front_stick.png" alt="Front Aiming Stick" />
    </div>

    <!-- Back Stick (Further away) - moves with background + less deflection parallax + intermediate elevation parallax -->
    <div class="stick-layer back-stick" style="transform: translate(calc(-50% + {backStickMovement}px), {backStickElevationShift}px);">
        <img src="/graphics/back_stick.png" alt="Back Aiming Stick" />
    </div>
</div>
