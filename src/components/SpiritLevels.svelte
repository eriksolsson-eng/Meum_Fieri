<script>
    export let lateralBubblePos;
    export let elevationBubblePos;
</script>

<style>
    .levels-section {
        margin-bottom: 30px;
        background: rgba(45, 50, 42, 0.95);
        padding: 20px;
        border-radius: 8px;
        box-shadow: 
            inset 0 2px 4px rgba(0, 0, 0, 0.4),
            0 4px 8px rgba(0, 0, 0, 0.3);
        border: 2px solid #4a4f42;
    }

    .level-label {
        font-size: 0.9rem;
        color: #9ca041;
        margin-bottom: 8px;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .spirit-level {
        width: 200px;
        height: 50px;
        background: rgba(0, 0, 0, 0.4);
        border: 3px solid #4a4f42;
        border-radius: 25px;
        position: relative;
        overflow: visible;
        margin: 0 auto 20px;
        box-shadow: 
            inset 0 3px 8px rgba(0, 0, 0, 0.4),
            0 2px 4px rgba(0, 0, 0, 0.4);
    }

    .center-marks {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 100%;
        z-index: 3;
    }

    .center-marks::before,
    .center-marks::after {
        content: '';
        position: absolute;
        left: 0;
        width: 4px;
        height: 40%;
        background: linear-gradient(to bottom, 
            rgba(180, 0, 0, 0.9),
            rgba(200, 50, 50, 0.8));
        box-shadow: 0 0 3px rgba(255, 0, 0, 0.6);
    }

    .center-marks::before {
        top: 0;
        border-radius: 0 0 2px 2px;
    }

    .center-marks::after {
        bottom: 0;
        border-radius: 2px 2px 0 0;
    }

    .bubble {
        width: 100px;
        height: 30px;
        background: radial-gradient(ellipse at center, 
            rgba(212, 209, 197, 0.95), 
            rgba(190, 187, 175, 0.85) 30%,
            rgba(170, 167, 155, 0.75) 60%,
            rgba(150, 147, 135, 0.65));
        border: 2px solid rgba(80, 75, 65, 0.6);
        border-radius: 15px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(calc(-50% + var(--bubble-pos, 0px)), -50%);
        transition: transform 0.15s ease-out;
        opacity: 0.9;
        z-index: 1;
    }
</style>

<div class="levels-section">
    <div class="level-label" title="HORIZONTAL LEVEL (Sv: Tvärlibellen) - Shows left-right tilt. MUST be centered for accurate fire. Affected by: Cross-Level adjustment, Deflection Crank position, terrain tilt from bipod moves. Adjust Cross-Level until bubble centered.">HORIZONTAL LEVEL</div>
    <div class="spirit-level" title="Center the bubble between the red marks. Bubble moves opposite to tilt direction.">
        <div class="center-marks"></div>
        <div class="bubble" style="--bubble-pos: {lateralBubblePos}px;"></div>
    </div>

    <div class="level-label" title="ELEVATION LEVEL (Sv: Längslibellen) - Shows if sight elevation matches mortar tube angle. MUST be centered for accurate fire. Adjust elevation controls until bubble centered.">ELEVATION SPIRIT LEVEL</div>
    <div class="spirit-level" title="Center the bubble between the red marks. Shows alignment between sight setting and actual tube angle.">
        <div class="center-marks"></div>
        <div class="bubble" style="--bubble-pos: {elevationBubblePos}px;"></div>
    </div>
</div>
