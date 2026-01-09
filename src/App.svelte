<script>
    import SightView from './components/SightView.svelte';
    import SpiritLevels from './components/SpiritLevels.svelte';
    import DeflectionIndicator from './components/DeflectionIndicator.svelte';
    import MissionControls from './components/MissionControls.svelte';
    import ElevationCoarse from './components/ElevationCoarse.svelte';
    import ElevationFine from './components/ElevationFine.svelte';
    import LateralCoarse from './components/LateralCoarse.svelte';
    import LateralFine from './components/LateralFine.svelte';
    import Modal from './components/Modal.svelte';
    import StartScreen from './components/StartScreen.svelte';
    
    // Import constants from centralized module
    import {
        REFERENCE_ELEVATION,
        SIGHT_PARALLAX_PX_PER_MIL,
        DEFLECTION_CRANK_PX_PER_MIL,
        FRONT_PARALLAX,
        BACK_PARALLAX,
        BACKGROUND_ELEVATION_PARALLAX,
        BACK_STICK_ELEVATION_PARALLAX,
        FRONT_STICK_ELEVATION_PARALLAX,
        ELEVATION_SENSITIVITY,
        LEVEL_SENSITIVITY,
        deflectionGranularity,
        elevationGranularity,
        crankGranularity,
        roughDeflectionStep,
        roughDeflectionStepMedium,
        DEFLECTION_CRANK_MIN,
        DEFLECTION_CRANK_MAX,
        ELEVATION_CRANK_MIN,
        ELEVATION_CRANK_MAX,
        CROSS_LEVEL_MIN,
        CROSS_LEVEL_MAX,
        BIPOD_ELEVATION_MIN,
        BIPOD_ELEVATION_MAX,
        BUBBLE_MAX_TRAVEL,
        ALIGNMENT_TOLERANCE,
        LATERAL_LEVEL_TOLERANCE,
        ELEVATION_LEVEL_TOLERANCE,
        gameMissions
    } from './lib/constants.js';
    
    // Import formatting utilities
    import { formatElapsedTime, formatMils, formatSignedMils, formatInt } from './lib/formatters.js';
    
    // Import game logic utilities
    import {
        getOnTargetThreshold,
        calculateFireError,
        generateScoutFeedback,
        generateTargetDisplay,
        calculateGameStats,
        getGameRating,
        getFuzeDescription
    } from './lib/gameLogic.js';
    
    // Import physics calculation utilities
    import {
        calcSightBackgroundMovement,
        calcDeflectionMovement,
        calcDeflectionParallax,
        calcStickMovement,
        calcElevationOffset,
        calcElevationShift,
        calcMortarElevation,
        calcDeflectionLateralEffect,
        calcElevationLateralEffect,
        calcLateralBubble,
        calcElevationBubble,
        clampBubblePosition,
        calcSymmetryError,
        checkRegistration,
        checkLaid,
        calcCrankPercent,
        generateRoughError,
        generateGroundVariation
    } from './lib/mortarPhysics.js';

    // --- Core State Variables (Driven by Levers) ---
    let sightElevation = 350; // Sighting instrument elevation setting (rotates the optic)
    let sightDeflection = 0;  // Sight deflection setting - rotates sight mechanism (mils)
    
    // DEFLECTION: Two separate systems
    let bipodPosition = 0;     // Rough adjustment - moving entire bipod (unlimited range)
    let deflectionCrank = 0;   // Fine adjustment - extension piston (LIMITED to ±25 mils)
    
    // ELEVATION: Two separate systems
    let bipodElevation = 0;    // Rough adjustment - bipod leg distance/foot position (±150 mils)
    let elevationCrank = 0;    // Fine adjustment - elevation crank (LIMITED to ±200 mils)
    
    let crossLevelAngle = 0;   // Lateral tilt of the bipod/tube
    let levelCompensationDeflection = 0;  // Parallax shift from cross-level adjustments (±0.2 per click)
    
    // --- Fire Mission Parameters ---
    const REGISTRATION_DEFLECTION = 0; // The zero reference when sticks are aligned (mils) - Swedish system
    
    let targetDeflection = 500; // Fire mission deflection (mils) - within limited range
    let targetElevation = 500; // Fire mission elevation (mils) - player must achieve this
    let targetCharge = 3;  // Charge zone 1-6
    let roundsToFire = 1;  // Number of rounds in fire mission
    let roundType = 'HE';  // 'HE', 'ILLUM', 'SMOKE'
    let fuzeType = 'impact';  // 'impact', 'proximity', 'delay'
    let fuzeDelay = 0;  // Seconds delay for illumination/smoke (0-30s)
    
    // Ammunition state
    let totalRoundsAvailable = 30;
    let roundsFired = 0;
    let roundInventory = {
        HE: 20,
        ILLUM: 5,
        SMOKE: 5
    };
    
    // Game state
    let currentMissionIndex = 0;
    let gameActive = false;
    const missionsPerGame = 3;
    
    // Screen state: 'start', 'training', 'simulation'
    let currentScreen = 'start';
    
    // Game stats tracking
    let missionErrors = [];      // Array of error values per mission
    let missionHits = [];         // Array of hit/miss booleans (based on dynamic thresholds)
    let missionTimes = [];       // Array of fire times per mission
    
    // Modal state
    let modalVisible = false;
    let modalTitle = '';
    let modalContent = '';
    let modalType = 'info';  // 'info', 'success', 'warning', 'error'
    
    function showModal(title, content, type = 'info') {
        modalTitle = title;
        modalContent = content;
        modalType = type;
        modalVisible = true;
    }
    
    function closeModal() {
        modalVisible = false;
    }
    
    // Mission timer
    let missionStartTime = null;
    let missionElapsedSeconds = 0;
    let timerInterval = null;
    
    function startMissionTimer() {
        missionStartTime = Date.now();
        missionElapsedSeconds = 0;
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            missionElapsedSeconds = (Date.now() - missionStartTime) / 1000;
        }, 100);  // Update every 100ms for smooth display
    }
    
    function stopMissionTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        if (missionStartTime) {
            missionElapsedSeconds = (Date.now() - missionStartTime) / 1000;
        }
        return missionElapsedSeconds;
    }
    
    // --- Parallax Validation ---
    if (FRONT_PARALLAX !== 1.0 || BACK_PARALLAX !== 0.5) {
        console.error('CRITICAL ERROR: Parallax constants have been modified! Aiming will not work correctly.');
        console.error(`Expected: FRONT=1.0, BACK=0.5 | Actual: FRONT=${FRONT_PARALLAX}, BACK=${BACK_PARALLAX}`);
    }
    
    // --- Derived Movement Variables ---
    // SIGHT SETTING: Rotates sight mechanism
    // - Moves background (what you see through the sight): 20 px/mil
    // - Creates parallax offset for sticks: 2.5 px/mil additional
    let sightBackgroundMovement = 0;
    $: sightBackgroundMovement = -sightDeflection * DEFLECTION_CRANK_PX_PER_MIL;
    
    let sightParallaxOffset = 0;
    $: sightParallaxOffset = sightDeflection * SIGHT_PARALLAX_PX_PER_MIL;
    
    // DEFLECTION: Combined bipod position + crank
    // - Both affect background and stick movement
    let totalDeflectionMovement = 0;
    $: totalDeflectionMovement = -(bipodPosition + deflectionCrank) * DEFLECTION_CRANK_PX_PER_MIL;
    
    // DEFLECTION PARALLAX: Only deflection creates parallax between sticks
    let deflectionParallaxOffset = 0;
    $: deflectionParallaxOffset = (bipodPosition + deflectionCrank) * SIGHT_PARALLAX_PX_PER_MIL;
    
    // TOTAL BACKGROUND MOVEMENT: Sight setting + total deflection
    let backgroundMovement = 0;
    $: backgroundMovement = sightBackgroundMovement + totalDeflectionMovement;
    
    // STICK POSITIONS: Follow background (sight + deflection) + parallax from DEFLECTION only
    // When sight moves: background and sticks move together (no parallax)
    // When deflection moves: parallax is created between sticks
    // LevelCompensationDeflection creates the "dance" between leveling and aiming
    let frontStickMovement = 0;
    let backStickMovement = 0;
    
    $: frontStickMovement = backgroundMovement + (deflectionParallaxOffset * FRONT_PARALLAX) + levelCompensationDeflection;
    $: backStickMovement = backgroundMovement + (deflectionParallaxOffset * BACK_PARALLAX) + levelCompensationDeflection;
    
    // Elevation changes the vertical position of the sight view
    // SIGHT STAYS FIXED - only background and sticks move (elevation parallax)
    let backgroundElevationShift = 0;
    let backStickElevationShift = 0;
    let frontStickElevationShift = 0;
    
    // Calculate total elevation offset from reference
    let totalElevationOffset = 0;
    $: totalElevationOffset = sightElevation + bipodElevation - REFERENCE_ELEVATION + elevationCrank;
    
    // INVERTED: Higher elevation = look DOWN at ground (negative shift)
    $: backgroundElevationShift = -totalElevationOffset * ELEVATION_SENSITIVITY * BACKGROUND_ELEVATION_PARALLAX;
    $: backStickElevationShift = -totalElevationOffset * ELEVATION_SENSITIVITY * BACK_STICK_ELEVATION_PARALLAX;
    $: frontStickElevationShift = -totalElevationOffset * ELEVATION_SENSITIVITY * FRONT_STICK_ELEVATION_PARALLAX;
    
    // --- Spirit Level Physics ---
    // The CRANKS affect spirit levels (rotating/tilting the mortar base)
    // The sight settings do NOT affect spirit levels
    
    // Environmental terrain tilt (accumulated from rough adjustments)
    let environmentalTilt = 0;
    
    // THREE SOURCES OF LATERAL TILT:
    // 1. Environmental: Random terrain variation from rough adjustments (1-6 mils)
    // 2. Elevation coupling: Mortar elevation affects lateral balance (0.01-0.04 mils per elevation mil)
    // 3. Deflection: Non-linear effect as crank approaches limits (quadratic curve, max 25 mils)
    
    let deflectionLateralEffect = 0;
    let elevationLateralEffect = 0;
    
    // Deflection effect: Quadratic curve - gentle at center, sharp at edges
    // DIRECTION: Reducing mils = bubble RIGHT, Increasing mils = bubble LEFT (REVERSED)
    // Spirit level maxes out at ±25 mils, crank continues to ±50
    $: deflectionLateralEffect = calcDeflectionLateralEffect(deflectionCrank);
    
    // Elevation coupling: Random factor applied to mortar elevation
    $: {
        const elevationOffset = mortarElevation - REFERENCE_ELEVATION;  // Offset from 350
        const couplingFactor = 0.01 + (Math.random() * 0.03);  // Random 0.01-0.04
        elevationLateralEffect = elevationOffset * couplingFactor;
    }
    
    // Elevation spirit level logic:
    // Spirit levels are mounted on the sighting instrument (sightElevation)
    // Mortar elevation (bipod + crank) moves the cross beam
    // Bubble centers when sight setting matches mortar tube angle
    let elevationLongitudinalEffect = 0;
    $: elevationLongitudinalEffect = sightElevation - (REFERENCE_ELEVATION + bipodElevation + elevationCrank);
    
    // Spirit level bubble physics
    // Calculate full tilt values (needed for crank compensation)
    let lateralBubbleCalc = 0;
    let elevationBubbleCalc = 0;
    
    // Only cross-level (3x effect) and other tilt sources affect horizontal bubble
    // Cross-level has 3 ratio: each click moves bubble 3 pixels
    $: lateralBubbleCalc = (-crossLevelAngle * 3 + environmentalTilt + elevationLateralEffect + deflectionLateralEffect) * LEVEL_SENSITIVITY;
    $: elevationBubbleCalc = elevationLongitudinalEffect * LEVEL_SENSITIVITY;
    
    // Constrain bubble display to spirit level boundaries
    let lateralBubblePos = 0;
    let elevationBubblePos = 0;
    
    $: lateralBubblePos = Math.max(-BUBBLE_MAX_TRAVEL, Math.min(BUBBLE_MAX_TRAVEL, lateralBubbleCalc));
    $: elevationBubblePos = Math.max(-BUBBLE_MAX_TRAVEL, Math.min(BUBBLE_MAX_TRAVEL, elevationBubbleCalc));
    
    // --- Total Aiming State ---
    let mortarDeflection = 0;  // Physical mortar orientation (ONLY bipod + crank)
    let totalDeflection = 0;   // Fire mission total (sight + mortar)
    let totalElevation = 0;    // Fire mission total (sight + mortar)
    let mortarElevation = 0;   // Physical mortar tube angle: REFERENCE (350) + bipod + crank (0-700 range)
    
    $: mortarDeflection = bipodPosition + deflectionCrank;  // Physical only
    $: totalDeflection = sightDeflection + bipodPosition + deflectionCrank;  // For fire mission
    $: totalElevation = sightElevation + bipodElevation + elevationCrank;
    $: mortarElevation = REFERENCE_ELEVATION + bipodElevation + elevationCrank;  // 350 is the zero point
    
    // --- Deflection Crank Position (for visual indicator) ---
    // Normalize to 0-1 range for visual display
    let deflectionCrankPercent = 0;
    $: deflectionCrankPercent = calcCrankPercent(deflectionCrank, DEFLECTION_CRANK_MIN, DEFLECTION_CRANK_MAX);
    
    // --- Success Conditions ---
    let isRegistered = false;
    let isLaid = false;
    
    // Registration: Parallax symmetry achieved at zero + levels centered
    $: isRegistered = checkRegistration({
        frontStickMovement,
        backStickMovement,
        lateralBubblePos,
        elevationBubblePos,
        sightDeflection,
        sightElevation,
        referenceElevation: REFERENCE_ELEVATION,
        alignmentTolerance: ALIGNMENT_TOLERANCE,
        lateralTolerance: LATERAL_LEVEL_TOLERANCE,
        elevationTolerance: ELEVATION_LEVEL_TOLERANCE
    });
    
    // Fire Mission: Parallax symmetry achieved at target + levels centered + sight set correctly
    $: isLaid = checkLaid({
        frontStickMovement,
        backStickMovement,
        lateralBubblePos,
        elevationBubblePos,
        sightDeflection,
        targetDeflection,
        sightElevation,
        targetElevation,
        alignmentTolerance: ALIGNMENT_TOLERANCE,
        lateralTolerance: LATERAL_LEVEL_TOLERANCE,
        elevationTolerance: ELEVATION_LEVEL_TOLERANCE
    });
    
    // --- Control Functions ---
    
    // Sight adjustment functions (for invisible click zones on visual components)
    function adjustSightDeflection(delta) {
        sightDeflection += delta;
    }
    
    function resetSightDeflection() {
        sightDeflection = 0;
    }
    
    function adjustSightElevation(delta) {
        sightElevation = Math.max(0, Math.min(700, sightElevation + delta));
    }
    
    function adjustCrossLevel(delta) {
        crossLevelAngle = Math.max(CROSS_LEVEL_MIN, Math.min(CROSS_LEVEL_MAX, crossLevelAngle + delta));
        
        // LevelCompensationDeflection: Cross-level adjustment affects parallax by ±1
        // This creates the "dance" between keeping level and aiming straight
        // Increasing cross-level (delta > 0) = -1 parallax, decreasing = +1
        levelCompensationDeflection += (delta > 0) ? -1 : 1;
    }
    
    function adjustDeflection(delta) {
        // Clamp to mechanical limits of extension piston
        deflectionCrank = Math.max(DEFLECTION_CRANK_MIN, 
                                   Math.min(DEFLECTION_CRANK_MAX, 
                                            deflectionCrank + delta));
        console.log('adjustDeflection:', { delta, deflectionCrank, totalDeflectionMovement, backgroundMovement, frontStickMovement, backStickMovement });
    }
    
    function adjustRoughDeflection(delta) {
        // Rough adjustment moves entire bipod, deflection crank stays where it is
        // Rough moves are never exact - add ±2-10 mils of imprecision
        const roughError = generateRoughError(2, 10);
        const actualDelta = delta + roughError;
        bipodPosition += actualDelta;
        
        // Ground conditions: Random ±3 mils variation (new terrain under bipod)
        // This is separate from traverse beam effects - purely environmental
        const groundVariation = generateGroundVariation(3);
        environmentalTilt += groundVariation;
        
        console.log('adjustRoughDeflection:', { delta, roughError, actualDelta, bipodPosition, groundVariation, environmentalTilt });
    }
    
    function adjustElevation(delta) {
        // Calculate proposed actual elevation
        const proposedCrank = elevationCrank + delta;
        const proposedActual = REFERENCE_ELEVATION + bipodElevation + proposedCrank;
        
        // Clamp actual elevation to [0, 700]
        if (proposedActual < 0) {
            elevationCrank = -(REFERENCE_ELEVATION + bipodElevation);
        } else if (proposedActual > 700) {
            elevationCrank = 700 - (REFERENCE_ELEVATION + bipodElevation);
        } else {
            // Within limits, apply with mechanical crank limits
            elevationCrank = Math.max(ELEVATION_CRANK_MIN, 
                                      Math.min(ELEVATION_CRANK_MAX, proposedCrank));
        }
    }
    
    function adjustRoughElevation(nominalDelta) {
        // Rough adjustment by moving bipod legs - rough moves are never exact
        // Add ±2-10 mils of imprecision to all rough elevation moves
        const roughError = generateRoughError(2, 10);
        let actualDelta = nominalDelta + roughError;
        
        // Calculate proposed bipod and actual elevation
        const proposedBipod = bipodElevation + actualDelta;
        const proposedActual = REFERENCE_ELEVATION + proposedBipod + elevationCrank;
        
        // First clamp to actual elevation range [0, 700]
        let clampedBipod = proposedBipod;
        if (proposedActual < 0) {
            clampedBipod = -(REFERENCE_ELEVATION + elevationCrank);
        } else if (proposedActual > 700) {
            clampedBipod = 700 - (REFERENCE_ELEVATION + elevationCrank);
        }
        
        // Then clamp to bipod mechanical limits [-150, +150]
        bipodElevation = Math.max(BIPOD_ELEVATION_MIN, 
                                  Math.min(BIPOD_ELEVATION_MAX, clampedBipod));
        
        // Ground conditions: Random ±3 mils variation (new terrain under bipod legs)
        // Same as rough deflection - moving legs changes ground contact point
        const groundVariation = generateGroundVariation(3);
        environmentalTilt += groundVariation;
        
        console.log('adjustRoughElevation:', { nominalDelta, actualDelta, bipodElevation, groundVariation, environmentalTilt });
    }
    
    // Fire mission execution
    function fireMission() {
        if (roundInventory[roundType] < roundsToFire) {
            showModal('Insufficient Rounds', `Not enough ${roundType} rounds!\n\nAvailable: ${roundInventory[roundType]}\nRequested: ${roundsToFire}`, 'error');
            return;
        }
        
        // Validate fuze settings
        if (roundType === 'ILLUM' && fuzeDelay === 0) {
            showModal('Fuze Required', 'Illumination rounds require a delay timer!', 'warning');
            return;
        }
        if (roundType === 'SMOKE' && fuzeDelay === 0) {
            showModal('Fuze Required', 'Smoke rounds require a delay timer!', 'warning');
            return;
        }
        
        const fuzeDescription = getFuzeDescription(roundType, fuzeType, fuzeDelay);
        
        // Stop mission timer
        const fireTime = stopMissionTimer();
        
        // Calculate accuracy error using extracted function
        const errorResult = calculateFireError({
            sightDeflection,
            targetDeflection,
            sightElevation,
            targetElevation,
            lateralBubblePos,
            elevationBubblePos,
            frontStickMovement,
            backStickMovement
        });
        
        const { deflectionError, elevationError, symmetryErrorPx, distanceToBack, distanceBackToFront, totalError } = errorResult;
        
        // Get dynamic threshold
        const onTargetThreshold = getOnTargetThreshold(roundType, fuzeType);
        
        // Generate feedback using extracted functions
        const { impactResult, scoutFeedback } = generateScoutFeedback(
            totalError, deflectionError, elevationError,
            sightDeflection, targetDeflection,
            sightElevation, targetElevation,
            onTargetThreshold
        );
        
        // Fire the rounds
        roundInventory[roundType] -= roundsToFire;
        totalRoundsAvailable -= roundsToFire;
        roundsFired += roundsToFire;
        
        // Generate target display using extracted function
        const targetDisplay = generateTargetDisplay(totalError, onTargetThreshold, deflectionError, elevationError);
        
        // Build clean data section
        const dataSection = `Target: ${targetDeflection} defl / ${targetElevation} elev
Sight: ${sightDeflection.toFixed(1)} / ${sightElevation.toFixed(1)}
Defl Err: ${deflectionError.toFixed(1)}  Elev Err: ${elevationError.toFixed(1)}
Bubble: ${lateralBubblePos.toFixed(1)}px lat / ${elevationBubblePos.toFixed(1)}px elev
Parallax: back=${distanceToBack.toFixed(0)} gap=${distanceBackToFront.toFixed(0)} err=${symmetryErrorPx.toFixed(1)}`;
        
        const fireResultContent = `${roundType}  Charge: ${targetCharge}  Fuze: ${fuzeDescription}

${targetDisplay}

${scoutFeedback}

Time: ${formatElapsedTime(fireTime)}  |  ${roundType}: ${roundInventory[roundType]} remaining

${dataSection}`;
        
        const resultType = totalError < onTargetThreshold ? 'success' : 'warning';
        showModal('FIRE FOR EFFECT', fireResultContent, resultType);
        
        // Track stats for game summary
        if (gameActive) {
            missionErrors.push(totalError);
            missionTimes.push(fireTime);
            missionHits.push(totalError < onTargetThreshold);
        }
        
        // Advance to next mission or end game
        if (gameActive) {
            currentMissionIndex++;
            if (currentMissionIndex >= missionsPerGame) {
                // Calculate game stats using extracted functions
                const stats = calculateGameStats(missionErrors, missionHits, missionTimes);
                const rating = getGameRating(stats.avgError);
                
                const gameCompleteContent = `${rating}

ACCURACY
🎯 On Target: ${stats.onTargetCount}
📍 Miss: ${stats.missCount}
⚠️ Off Target (15-35 mils): ${stats.offTargetCount}
🚨 Danger Zone (35+ mils): ${stats.dangerCount}
Avg Error: ${stats.avgError.toFixed(1)} mils

TIME
Mission 1: ${formatElapsedTime(missionTimes[0] || 0)}
Mission 2: ${formatElapsedTime(missionTimes[1] || 0)}
Mission 3: ${formatElapsedTime(missionTimes[2] || 0)}
Total: ${formatElapsedTime(stats.totalTime)}

AMMO
Rounds expended: ${roundsFired}`;
                
                showModal('GAME COMPLETE', gameCompleteContent, 'success');
                endGame();
            } else {
                showModal('Mission Complete', `Mission ${currentMissionIndex}/3 complete!\n\nNext mission loading...`, 'info');
                loadNextMission();
            }
        }
    }
    
    function startGame() {
        gameActive = true;
        currentMissionIndex = 0;
        roundsFired = 0;
        totalRoundsAvailable = 30;
        roundInventory = { HE: 20, ILLUM: 5, SMOKE: 5 };
        missionErrors = [];  // Reset stats
        missionHits = [];    // Reset hit tracking
        missionTimes = [];   // Reset stats
        loadNextMission();
        showModal('GAME STARTED', '3 fire missions incoming.\n\nMission 1/3 loaded.', 'info');
    }
    
    function loadNextMission() {
        const mission = gameMissions[currentMissionIndex];
        targetDeflection = mission.deflection;
        targetElevation = mission.elevation;
        targetCharge = mission.charge;
        roundType = mission.roundType;
        fuzeType = mission.fuzeType || 'impact';
        fuzeDelay = mission.fuzeDelay || 0;
        roundsToFire = 1;
        startMissionTimer();  // Start timing this mission
    }
    
    function endGame() {
        gameActive = false;
        currentMissionIndex = 0;
        stopMissionTimer();
    }
    
    function handleModeSelect(event) {
        const { mode } = event.detail;
        if (mode === 'training') {
            currentScreen = 'training';
        } else if (mode === 'simulation') {
            showModal('Coming Soon', 'Simulation mode is under development.\n\nCheck back soon!', 'info');
        }
    }
</script>

<style>
    /* ===== LAYOUT DIMENSION VARIABLES ===== */
    /* Primary element dimensions (from component images) */
    .game-container {
        --sight-width: 1100px;
        --sight-height: 1100px;
        --lateral-fine-width: 237px;
        --lateral-fine-height: 237px;
        --lateral-coarse-width: 764px;
        --elevation-fine-width: 307px;
        --right-panel-width: 400px;
        
        /* Derived values */
        --elevation-fine-half: 153.5px;  /* elevation-fine-width / 2 */
        --lateral-fine-half: 118.5px;    /* lateral-fine-height / 2 */
        --sight-vcenter: 550px;          /* sight-height / 2 */
        
        /* Gaps and spacing */
        --layout-gap: 30px;
        --layout-gap-small: 20px;
    }
    /* ===== END LAYOUT VARIABLES ===== */

    .game-container {
        max-width: 2400px;
        width: 100%;
        margin: 0 auto;
        padding: 20px;
        color: #d4d1c5;
    }

    .title {
        font-size: 3rem;
        font-weight: bold;
        text-align: center;
        color: #9ca041;
        margin-bottom: 10px;
        text-transform: uppercase;
        letter-spacing: 4px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
    }

    .subtitle {
        text-align: center;
        color: #a39e8b;
        margin-bottom: 30px;
        font-size: 1.1rem;
    }

    .main-layout {
        /* CSS Grid container for responsive layout */
        display: grid;
        grid-template-columns: 
            [sight-start] var(--sight-width) [sight-end]
            var(--layout-gap)
            [elev-start] var(--elevation-fine-width) [elev-end]
            var(--layout-gap)
            [panel-start] var(--right-panel-width) [panel-end];
        grid-template-rows:
            [top] var(--sight-height) [sight-bottom]
            var(--layout-gap)
            [lateral-start] var(--lateral-fine-height) [lateral-end]
            var(--layout-gap-small)
            [controls-start] auto [controls-end];
        
        /* Keep position relative for any remaining absolute children */
        position: relative;
    }
    
    /* SightView - anchor object, left page edge */
    .sight-view-container {
        /* Grid placement: top-left cell */
        grid-column: sight-start / sight-end;
        grid-row: top / sight-bottom;
    }
    
    /* SpiritLevels - top of elevation column, centered */
    .spirit-levels-wrapper {
        /* Grid placement: elevation column, top row */
        grid-column: elev-start / elev-end;
        grid-row: top / sight-bottom;
        /* Position within cell: top, horizontally centered */
        align-self: start;
        justify-self: center;
    }
    
    /* ElevationCoarse - elevation column, vertically centered */
    .elevation-coarse-container-wrapper {
        /* Grid placement: elevation column, top row */
        grid-column: elev-start / elev-end;
        grid-row: top / sight-bottom;
        /* Position within cell: vertically and horizontally centered */
        align-self: center;
        justify-self: center;
    }
    
    /* ElevationFine - elevation column, bottom aligned */
    .elevation-fine-container-wrapper {
        /* Grid placement: elevation column, top row */
        grid-column: elev-start / elev-end;
        grid-row: top / sight-bottom;
        /* Position within cell: bottom, left aligned (default) */
        align-self: end;
    }
    
    /* Elevation Controls - left-aligned to status info box left edge */
    .elevation-controls-wrapper {
        position: absolute;
        left: calc(var(--lateral-fine-width) + var(--layout-gap) + var(--lateral-coarse-width) + var(--layout-gap-small));  /* Same left as status-info-wrapper */
        top: calc(var(--sight-height) + var(--layout-gap-small));
        width: var(--right-panel-width);
    }
    
    .elevation-controls-box {
        position: relative;
        background: rgba(45, 50, 42, 0.95);
        padding: 8px 8px 0 8px;  /* No bottom padding (-12px) */
        border-radius: 8px;
        border: 2px solid #4a4f42;
        box-shadow: 
            inset 0 1px 2px rgba(0, 0, 0, 0.3),
            0 4px 8px rgba(0, 0, 0, 0.3);
        display: flex;
        gap: 12px;  /* Reduced gap */
    }
    
    .elevation-controls-buttons {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 2px;  /* Minimal gap for compact height */
    }
    
    /* Compact inline controls for elevation box */
    .elevation-controls-buttons .inline-control-group {
        padding: 8px;
        margin-bottom: 0;
    }
    
    .elevation-controls-buttons .inline-control-label {
        margin-bottom: 6px;
        font-size: 0.75rem;
    }
    
    .elevation-controls-buttons .inline-button-group button {
        padding: 8px 6px;
        font-size: 0.75rem;
    }
    
    /* Hydraulic Piston Indicator */
    .elevation-piston-wrapper {
        width: 80px;
        height: 220px;  /* Wrapper for 190px piston */
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .elevation-piston {
        position: relative;
        width: 50px;
        height: 190px;  /* 190px piston */
        background: linear-gradient(to right, 
            #505550 0%, 
            #808888 15%, 
            #b0b8c0 35%,
            #d0d8e0 50%,
            #b0b8c0 65%, 
            #808888 85%, 
            #505550 100%);
        border-radius: 8px;
        border: 2px solid #404448;
        box-shadow: 
            inset 0 0 20px rgba(0, 0, 0, 0.4),
            0 4px 8px rgba(0, 0, 0, 0.4),
            inset 3px 0 8px rgba(255, 255, 255, 0.3),
            inset -3px 0 8px rgba(0, 0, 0, 0.2);
        overflow: hidden;
    }
    
    /* Cylinder body markings */
    .piston-cylinder-marks {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 18px,
            rgba(0, 0, 0, 0.2) 18px,
            rgba(0, 0, 0, 0.2) 20px
        );
    }
    
    /* Top seal/cap */
    .piston-top-cap {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 12px;
        background: linear-gradient(to bottom, 
            #909498 0%, 
            #606468 50%, 
            #404448 100%);
        border-bottom: 2px solid #303438;
        border-radius: 6px 6px 0 0;
    }
    
    /* Bottom seal/cap */
    .piston-bottom-cap {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 12px;
        background: linear-gradient(to top, 
            #909498 0%, 
            #606468 50%, 
            #404448 100%);
        border-top: 2px solid #303438;
        border-radius: 0 0 6px 6px;
    }
    
    /* Center line (zero position) */
    .piston-center-line {
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 3px;
        background: #9ca041;
        box-shadow: 0 0 4px rgba(156, 160, 65, 0.5);
        z-index: 5;
    }
    
    /* Piston rod (the moving part) - chrome finish */
    .piston-rod {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 20px;
        background: linear-gradient(to right,
            #a0a8b0 0%,
            #d0d8e0 25%,
            #f0f4f8 50%,
            #d0d8e0 75%,
            #a0a8b0 100%);
        border-radius: 4px;
        transition: height 0.1s, top 0.1s, bottom 0.1s;
        z-index: 10;
        box-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.4),
            inset 0 0 3px rgba(255, 255, 255, 0.6);
    }
    
    /* Piston head (where rod meets movement) - chrome */
    .piston-head {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 8px;
        background: linear-gradient(to bottom,
            #c0c8d0 0%,
            #808890 100%);
        border-radius: 2px;
        z-index: 11;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    }
    
    .piston-head-top {
        bottom: 50%;
    }
    
    .piston-head-bottom {
        top: 50%;
    }
    
    .elevation-piston-labels {
        position: absolute;
        right: -35px;
        top: 12px;
        bottom: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 0.65rem;
        color: #9ca041;
        font-weight: bold;
    }
    
    .elevation-piston-value {
        margin-top: 4px;
        text-align: center;
        font-size: 0.9rem;
        color: #d4d1c5;
        font-weight: bold;
    }
    
    /* LateralFine - below SightView, left-aligned */
    .lateral-fine-wrapper {
        position: absolute;
        left: 0;
        top: calc(var(--sight-height) + var(--layout-gap));
    }

    /* LateralCoarse - right of LateralFine, vertically centered to LateralFine */
    .lateral-coarse-wrapper {
        position: absolute;
        left: calc(var(--lateral-fine-width) + var(--layout-gap));
        top: calc(var(--sight-height) + var(--layout-gap) + var(--lateral-fine-half));
        transform: translateY(-50%);
    }
    
    /* Deflection Controls - spans LateralCoarse width */
    .deflection-controls-wrapper {
        position: absolute;
        left: calc(var(--lateral-fine-width) + var(--layout-gap));  /* LateralCoarse left edge */
        top: calc(var(--sight-height) + var(--layout-gap) + var(--lateral-fine-height) + var(--layout-gap-small));  /* Below LateralFine */
        width: var(--lateral-coarse-width);  /* Same width as LateralCoarse cylinder */
    }
    
    .deflection-controls-box {
        position: relative;
        background: rgba(45, 50, 42, 0.95);
        padding: 20px;
        border-radius: 8px;
        border: 2px solid #4a4f42;
        box-shadow: 
            inset 0 1px 2px rgba(0, 0, 0, 0.3),
            0 4px 8px rgba(0, 0, 0, 0.3);
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
    }
    
    /* Status Info Box - DEV/SANDBOX ONLY - spans to right panel right edge */
    .status-info-wrapper {
        position: absolute;
        left: calc(var(--lateral-fine-width) + var(--layout-gap) + var(--lateral-coarse-width) + var(--layout-gap-small));  /* Right of deflection box + gap */
        width: calc((var(--sight-width) + var(--layout-gap) + var(--elevation-fine-width) + var(--layout-gap) + var(--right-panel-width)) - (var(--lateral-fine-width) + var(--layout-gap) + var(--lateral-coarse-width) + var(--layout-gap-small)));  /* Span to right panel right edge */
        top: calc(var(--sight-height) + var(--layout-gap) + var(--lateral-fine-height) + var(--layout-gap-small));  /* Same top as deflection box */
    }
    
    .status-info-box {
        position: relative;
        background: rgba(45, 50, 42, 0.95);
        padding: 20px;
        border-radius: 8px;
        border: 2px solid #4a4f42;
        box-shadow: 
            inset 0 1px 2px rgba(0, 0, 0, 0.3),
            0 4px 8px rgba(0, 0, 0, 0.3);
        display: grid;
        grid-template-columns: repeat(3, 1fr);  /* 3 columns */
        gap: 12px;
    }
    
    .status-info-box .info-line {
        font-size: 1.05rem;  /* Larger font */
        padding: 10px 12px;
        background: rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        color: #d4d1c5;
    }
    
    .status-info-box .info-highlight {
        font-weight: bold;
        color: #9ca041;
    }
    
    /* Mission Timer styling */
    .status-info-box .mission-timer {
        grid-column: span 3;  /* Span full width */
        background: rgba(156, 160, 65, 0.2);
        border: 2px solid #9ca041;
        text-align: center;
        font-size: 1.3rem;
        font-weight: bold;
    }
    
    .status-info-box .timer-value {
        font-family: 'Courier New', monospace;
        font-size: 1.5rem;
        color: #c4d041;
        letter-spacing: 2px;
    }
    
    /* Box labels - small reference text in upper right */
    .box-label {
        position: absolute;
        top: 4px;
        right: 8px;
        font-size: 0.6rem;
        color: rgba(156, 160, 65, 0.6);
        text-transform: uppercase;
        letter-spacing: 1px;
        pointer-events: none;
    }
    
    /* Right Panel - game controls */
    .right-panel-wrapper {
        /* Grid placement: right column, top row */
        grid-column: panel-start / panel-end;
        grid-row: top / sight-bottom;
    }

    .right-panel {
        background: rgba(55, 60, 50, 0.95);
        border-radius: 8px;
        padding: 25px;
        border: 2px solid #4a4f42;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
        width: var(--right-panel-width);
        z-index: 100;
        position: relative;
    }
    
    /* Inline control styling */
    .inline-control-group {
        background: rgba(45, 50, 42, 0.95);
        padding: 15px;
        border-radius: 8px;
        border: 2px solid #4a4f42;
        margin-bottom: 15px;
        box-shadow: 
            inset 0 1px 2px rgba(0, 0, 0, 0.3),
            0 4px 8px rgba(0, 0, 0, 0.3);
    }

    .inline-control-label {
        font-size: 0.85rem;
        color: #9ca041;
        margin-bottom: 10px;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .inline-button-group {
        display: flex;
        gap: 10px;
    }

    .inline-button-group button {
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

    .inline-button-group button:hover {
        background: linear-gradient(to bottom, #6b7060 0%, #5a6050 100%);
        transform: translateY(-2px);
        box-shadow: 0 6px 0 #3d4237;
    }

    .inline-button-group button:active {
        transform: translateY(2px);
        box-shadow: 0 2px 0 #3d4237;
    }
    
    /* Status indicators for right panel */
    .status-indicator {
        padding: 12px;
        border-radius: 6px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 10px;
    }

    .status-registered {
        background: #3d5a3d;
        color: #9ca041;
    }

    .status-not-registered {
        background: #5a4232;
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

{#if currentScreen === 'start'}
    <StartScreen on:modeselect={handleModeSelect} />
{:else}
<div class="game-container">
    <h1 class="title">Mortar Duty</h1>
    <p class="subtitle">Swedish Mortar Aiming Simulator</p>

    <div class="main-layout">
        <!-- SightView - anchor at left page edge -->
        <div class="sight-view-container">
            <SightView 
                {backgroundMovement}
                {frontStickMovement}
                {backStickMovement}
                {backgroundElevationShift}
                {backStickElevationShift}
                {frontStickElevationShift}
            />
        </div>
        
        <!-- Spirit Levels - above ElevationCoarse -->
        <div class="spirit-levels-wrapper">
            <SpiritLevels 
                {lateralBubblePos}
                {elevationBubblePos}
            />
        </div>
        
        <!-- ElevationCoarse - right of SightView -->
        <div class="elevation-coarse-container-wrapper">
            <ElevationCoarse {sightElevation} onAdjust={adjustSightElevation} />
        </div>
        
        <!-- ElevationFine - below ElevationCoarse, center-aligned -->
        <div class="elevation-fine-container-wrapper">
            <ElevationFine {sightElevation} onAdjust={adjustSightElevation} />
        </div>
        
        <!-- Elevation Controls - grouped in box like deflection controls -->
        <div class="elevation-controls-wrapper">
            <div class="elevation-controls-box">
                <span class="box-label">Elevation</span>
                <!-- Hydraulic Piston Indicator -->
                <div class="elevation-piston-wrapper" title="Elevation Crank Position (Sv: Höjdvevläge) - Hydraulic piston showing current elevation crank setting within ±250 mil range. Center = 0.">
                    <div class="elevation-piston">
                        <div class="piston-cylinder-marks"></div>
                        <div class="piston-top-cap"></div>
                        <div class="piston-bottom-cap"></div>
                        <div class="piston-center-line"></div>
                        {#if elevationCrank >= 0}
                            <div class="piston-rod" style="bottom: 50%; height: {Math.abs(elevationCrank) / ELEVATION_CRANK_MAX * 40}%;"></div>
                            <div class="piston-head piston-head-top" style="bottom: calc(50% + {Math.abs(elevationCrank) / ELEVATION_CRANK_MAX * 40}%);"></div>
                        {:else}
                            <div class="piston-rod" style="top: 50%; height: {Math.abs(elevationCrank) / Math.abs(ELEVATION_CRANK_MIN) * 40}%;"></div>
                            <div class="piston-head piston-head-bottom" style="top: calc(50% + {Math.abs(elevationCrank) / Math.abs(ELEVATION_CRANK_MIN) * 40}%);"></div>
                        {/if}
                        <div class="elevation-piston-labels">
                            <span>+250</span>
                            <span>0</span>
                            <span>-250</span>
                        </div>
                    </div>
                    <div class="elevation-piston-value">{elevationCrank?.toFixed(0) ?? '0'}</div>
                </div>
                
                <!-- Elevation Controls Buttons -->
                <div class="elevation-controls-buttons">
                    <!-- Elevation Crank -->
                    <div class="inline-control-group" title="Elevation Crank (Sv: Höjdriktvev) - Fine adjustment of mortar tube angle. Range ±250 mils. Used to precisely match the fire mission elevation after rough adjustment.">
                        <div class="inline-control-label">Elevation Crank</div>
                        <div class="inline-button-group">
                            <button on:click={() => adjustElevation(-crankGranularity)} title="Lower tube angle (decrease elevation). Sv: Sänk eldröret">DOWN</button>
                            <button on:click={() => adjustElevation(crankGranularity)} title="Raise tube angle (increase elevation). Sv: Höj eldröret">UP</button>
                        </div>
                    </div>
                    <!-- Rough Elevation (Bipod Legs) -->
                    <div class="inline-control-group" title="Rough Elevation / Bipod Legs (Sv: Grovinställning/Lavettben) - Large elevation changes by adjusting bipod leg spread. ±75 has slight imprecision. Use for major elevation changes, then fine-tune with crank.">
                        <div class="inline-control-label">Rough Elevation (Bipod Legs)</div>
                        <div class="inline-button-group">
                            <button on:click={() => adjustRoughElevation(-150)} title="Lower elevation 150 mils (close legs significantly). Sv: Sänk 150">-150</button>
                            <button on:click={() => adjustRoughElevation(-75)} title="Lower elevation ~75 mils (close legs slightly, has slop). Sv: Sänk ~75">-75</button>
                            <button on:click={() => adjustRoughElevation(75)} title="Raise elevation ~75 mils (spread legs slightly, has slop). Sv: Höj ~75">+75</button>
                            <button on:click={() => adjustRoughElevation(150)} title="Raise elevation 150 mils (spread legs significantly). Sv: Höj 150">+150</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- LateralFine - below SightView, left-aligned -->
        <div class="lateral-fine-wrapper">
            <LateralFine {sightDeflection} onAdjust={adjustSightDeflection} />
        </div>
        
        <!-- LateralCoarse - right of LateralFine -->
        <div class="lateral-coarse-wrapper">
            <LateralCoarse {sightDeflection} onAdjust={adjustSightDeflection} onReset={resetSightDeflection} />
        </div>
        
        <!-- Deflection Controls - all in one box -->
        <div class="deflection-controls-wrapper">
            <div class="deflection-controls-box">
                <span class="box-label">Deflection</span>
                <!-- Deflection Crank -->
                <div class="inline-control-group" title="Deflection Crank (Sv: Sidkorrektionsvev) - Fine adjustment of mortar traverse. Moves the traverse beam ±50 mils. Used after rough positioning to precisely align the mortar.">
                    <div class="inline-control-label">Deflection Crank</div>
                    <div class="inline-button-group">
                        <button on:click={() => adjustDeflection(-crankGranularity)} title="Decrease deflection (turn crank left). Sv: Vrid vänster">LEFT</button>
                        <button on:click={() => adjustDeflection(crankGranularity)} title="Increase deflection (turn crank right). Sv: Vrid höger">RIGHT</button>
                    </div>
                </div>
                
                <!-- Traverse Beam Position (+/-50) -->
                <div title="Traverse Beam Position (Sv: Sidkorrektionsläge) - Shows current position of the deflection crank within its ±50 mil range. Center = neutral. Affects the horizontal spirit level.">
                    <DeflectionIndicator 
                        {deflectionCrank}
                        {deflectionCrankPercent}
                        {DEFLECTION_CRANK_MIN}
                        {DEFLECTION_CRANK_MAX}
                    />
                </div>
                
                <!-- Rough Deflection -->
                <div class="inline-control-group" title="Rough Deflection / Bipod Move (Sv: Grovsikte/Lavettförflyttning) - Large traverse adjustments by physically moving the bipod. Introduces terrain tilt requiring re-leveling. Use when target is outside fine crank range.">
                    <div class="inline-control-label">Rough Deflection (Bipod Move)</div>
                    <div class="inline-button-group">
                        <button on:click={() => adjustRoughDeflection(-roughDeflectionStep)} title="Move bipod left 150 mils (large). Sv: Flytta lavett vänster 150">◀◀</button>
                        <button on:click={() => adjustRoughDeflection(-roughDeflectionStepMedium)} title="Move bipod left 60 mils (medium). Sv: Flytta lavett vänster 60">◀</button>
                        <button on:click={() => adjustRoughDeflection(roughDeflectionStepMedium)} title="Move bipod right 60 mils (medium). Sv: Flytta lavett höger 60">▶</button>
                        <button on:click={() => adjustRoughDeflection(roughDeflectionStep)} title="Move bipod right 150 mils (large). Sv: Flytta lavett höger 150">▶▶</button>
                    </div>
                </div>
                
                <!-- Cross Level -->
                <div class="inline-control-group" title="Cross-Level (Sv: Tvärlibellering) - Levels the mortar left-right. CRITICAL: Must be centered for accurate fire. Adjust until horizontal spirit level bubble is centered.">
                    <div class="inline-control-label">Cross-Level</div>
                    <div class="inline-button-group">
                        <button on:click={() => adjustCrossLevel(-crankGranularity)} title="Tilt mortar left. Sv: Luta vänster">LEFT</button>
                        <button on:click={() => adjustCrossLevel(crankGranularity)} title="Tilt mortar right. Sv: Luta höger">RIGHT</button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- DEV/SANDBOX METADATA - Status Info Box -->
        <div class="status-info-wrapper">
            <div class="status-info-box">
                <span class="box-label">Debug</span>
                <div class="info-line" title="Sight Deflection (Sv: Siktets sidvärde) - The deflection value set on the sighting instrument. Combined with mortar deflection for total fire mission deflection.">Sight Deflection: <span class="info-highlight">{sightDeflection?.toFixed(1) ?? '0.0'}</span> mils</div>
                <div class="info-line" title="Bipod Position (Sv: Lavettposition) - Accumulated rough deflection from bipod movement. Large movements outside fine crank range.">Bipod Position: {bipodPosition?.toFixed(1) ?? '0.0'} mils</div>
                <div class="info-line" title="Deflection Crank (Sv: Sidkorrektionsvev) - Fine deflection adjustment within ±50 mil range. Shown on Traverse Beam Position indicator.">Deflection Crank: {deflectionCrank?.toFixed(1) ?? '0.0'} mils</div>
                <div class="info-line info-highlight" title="Mortar Deflection (Sv: Pjäsens sidvärde) - Physical mortar orientation = Bipod Position + Deflection Crank. The actual direction the tube points.">Mortar Deflection: {mortarDeflection?.toFixed(1) ?? '0.0'} mils</div>
                <div class="info-line" title="Sight Elevation (Sv: Siktets höjdvärde) - The elevation value set on the sighting instrument dials. Target elevation from fire mission.">Sight Elevation: <span class="info-highlight">{sightElevation?.toFixed(1) ?? '0.0'}</span> mils</div>
                <div class="info-line" title="Bipod Elevation (Sv: Lavettens höjdläge) - Rough elevation from bipod leg adjustment. Range ±150 mils.">Bipod Elevation: {bipodElevation?.toFixed(1) ?? '0.0'} mils</div>
                <div class="info-line" title="Elevation Crank (Sv: Höjdriktvev) - Fine elevation adjustment. Range ±250 mils.">Elevation Crank: {elevationCrank?.toFixed(1) ?? '0.0'} mils</div>
                <div class="info-line" title="Cross-Level Angle (Sv: Tvärlibellering) - Current left-right tilt of mortar. Should be 0 for accurate fire. Adjust with Cross-Level controls.">Cross-Level: {crossLevelAngle?.toFixed(2) ?? '0.00'} mils</div>
                <div class="info-line info-highlight" title="Mortar Elevation (Sv: Pjäsens höjdvärde) - Actual tube angle = 350 (reference) + Bipod Elevation + Elevation Crank. Valid range 0-700 mils.">Mortar Elevation: {mortarElevation?.toFixed(1) ?? '0.0'} mils (0-700)</div>
                <!-- Mission Timer -->
                {#if gameActive}
                    <div class="info-line mission-timer" title="Mission Timer (Sv: Uppdragstimer) - Time elapsed since mission was loaded. Speed and accuracy both matter!">
                        ⏱️ MISSION TIME: <span class="timer-value">{formatElapsedTime(missionElapsedSeconds)}</span>
                    </div>
                {/if}
            </div>
        </div>
        
        <!-- Right Panel - Game Controls -->
        <div class="right-panel-wrapper">
            <div class="right-panel">
                <span class="box-label">Mission</span>
                <!-- Registration and Fire Mission Laid Status -->
                <div class="status-indicator {isRegistered ? 'status-registered' : 'status-not-registered'}" title="REGISTRATION (Sv: Nollställning) - Aligns the sight with aiming stakes at zero deflection. HOW TO ALIGN: 1) Set sight deflection to 0. 2) Adjust Cross-Level until horizontal bubble centered. 3) Adjust Deflection Crank until parallax symmetry achieved (equal spacing: crosshair-to-back = back-to-front). 4) Center elevation bubble. WHY IMPORTANT: Establishes the zero reference for all fire missions.">
                    REGISTRATION: {isRegistered ? '✓ ALIGNED' : '✗ NOT ALIGNED'}
                </div>
                <div class="status-indicator {isLaid ? 'status-laid' : 'status-not-laid'}" title="FIRE MISSION LAID (Sv: Inriktad på mål) - Mortar is aimed at target. HOW TO LAY: 1) Set sight deflection/elevation to target values. 2) Adjust controls until parallax symmetry achieved. 3) Both spirit levels must be centered. WHY IMPORTANT: Confirms mortar will hit the designated target coordinates.">
                    FIRE MISSION: {isLaid ? '✓ LAID' : '✗ NOT LAID'}
                </div>
                
                <!-- Fire Mission & Sighting Controls -->
                <MissionControls 
                    bind:targetDeflection
                    bind:targetElevation
                    bind:targetCharge
                    bind:roundsToFire
                    bind:roundType
                    bind:fuzeType
                    bind:fuzeDelay
                    bind:sightDeflection
                    bind:sightElevation
                    {deflectionGranularity}
                    {elevationGranularity}
                    {totalRoundsAvailable}
                    {roundsFired}
                    {roundInventory}
                    {isLaid}
                    {fireMission}
                    {gameActive}
                    {currentMissionIndex}
                    {startGame}
                />
            </div>
        </div>
    </div>
</div>
{/if}

<!-- Modal Overlay -->
<Modal 
    visible={modalVisible}
    title={modalTitle}
    content={modalContent}
    type={modalType}
    onClose={closeModal}
/>
