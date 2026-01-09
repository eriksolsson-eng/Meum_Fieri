/**
 * Game logic utility functions for fire mission calculations
 * Pure functions extracted from App.svelte for maintainability and testability
 */

/**
 * Get dynamic "on target" threshold based on mission type
 * Hard targets need precision, area effects are more forgiving
 * @param {string} round - Round type: 'HE', 'ILLUM', 'SMOKE'
 * @param {string} fuze - Fuze type: 'impact', 'proximity', 'delay'
 * @returns {number} Threshold in mils
 */
export function getOnTargetThreshold(round, fuze) {
    if (round === 'ILLUM') return 18;      // Illumination - just light up the area
    if (round === 'SMOKE') return 12;      // Smoke screen - obscure the zone
    if (round === 'HE') {
        if (fuze === 'delay') return 5;    // Bunker/fortification - hard target
        if (fuze === 'proximity') return 8; // Airburst - covers larger area
        return 6;                           // Impact fuze - point target
    }
    return 6; // Default fallback
}

/**
 * Calculate total fire error from aiming components
 * @param {object} params - Aiming state parameters
 * @returns {object} Error breakdown and total
 */
export function calculateFireError({
    sightDeflection,
    targetDeflection,
    sightElevation,
    targetElevation,
    lateralBubblePos,
    elevationBubblePos,
    frontStickMovement,
    backStickMovement
}) {
    // 1. Sight setting error (mils)
    const deflectionError = Math.abs(sightDeflection - targetDeflection);
    const elevationError = Math.abs(sightElevation - targetElevation);
    
    // 2. Level error contribution (bubble pixels → mils, roughly 2 mils per pixel)
    const lateralLevelError = Math.abs(lateralBubblePos) * 2;
    const elevationLevelError = Math.abs(elevationBubblePos) * 2;
    
    // 3. Parallax symmetry error (pixels → mils, roughly 3 mils per pixel)
    const crosshairPos = 0;
    const distanceToBack = Math.abs(backStickMovement - crosshairPos);
    const distanceBackToFront = Math.abs(frontStickMovement - backStickMovement);
    const symmetryErrorPx = Math.abs(distanceToBack - distanceBackToFront);
    const symmetryError = symmetryErrorPx * 3;
    
    // Total error (weighted combination)
    const totalError = deflectionError + elevationError + 
                      (lateralLevelError * 0.2) + (elevationLevelError * 0.5) + 
                      (symmetryError * 0.2);
    
    return {
        deflectionError,
        elevationError,
        lateralLevelError,
        elevationLevelError,
        symmetryErrorPx,
        symmetryError,
        distanceToBack,
        distanceBackToFront,
        totalError
    };
}

/**
 * Generate scout feedback based on error magnitude
 * @param {number} totalError - Total error in mils
 * @param {number} deflectionError - Deflection error in mils
 * @param {number} elevationError - Elevation error in mils
 * @param {number} sightDeflection - Current sight deflection
 * @param {number} targetDeflection - Target deflection
 * @param {number} sightElevation - Current sight elevation
 * @param {number} targetElevation - Target elevation
 * @param {number} threshold - On-target threshold
 * @returns {object} { impactResult, scoutFeedback }
 */
export function generateScoutFeedback(
    totalError,
    deflectionError,
    elevationError,
    sightDeflection,
    targetDeflection,
    sightElevation,
    targetElevation,
    threshold
) {
    let impactResult = '';
    let scoutFeedback = '';
    
    if (totalError < threshold) {
        impactResult = '🎯 ROUNDS ON TARGET!';
        scoutFeedback = 'Scout Report: Target destroyed. Good effect on target.';
    } else if (totalError < 15) {
        const direction = deflectionError > elevationError ? 
            (sightDeflection < targetDeflection ? 'RIGHT' : 'LEFT') :
            (sightElevation < targetElevation ? 'ADD' : 'DROP');
        const correction = Math.round(totalError);
        impactResult = '📍 Near miss';
        scoutFeedback = `Scout Correction: ${direction} ${correction} mils, fire for effect.`;
    } else if (totalError < 35) {
        const deflDir = sightDeflection < targetDeflection ? 'RIGHT' : 'LEFT';
        const elevDir = sightElevation < targetElevation ? 'ADD' : 'DROP';
        impactResult = '⚠️ OFF TARGET';
        scoutFeedback = `Scout Correction: ${deflDir} ${Math.round(deflectionError)} mils, ${elevDir} ${Math.round(elevationError)} mils. Re-lay and fire.`;
    } else if (totalError < 75) {
        impactResult = '🚨 DANGER - Rounds impacted in uncleared zone!';
        scoutFeedback = 'Scout Report: CHECK FIRE! Rounds impacting near civilian infrastructure. Verify target data.';
    } else {
        impactResult = '💀 CRITICAL - FRIENDLY FIRE INCIDENT!';
        scoutFeedback = 'CEASE FIRE! Rounds impacted friendly positions! Immediate investigation required.';
    }
    
    return { impactResult, scoutFeedback };
}

/**
 * Generate ASCII target visualization
 * Circle size scales with threshold (bigger threshold = bigger circle)
 * @param {number} error - Total error
 * @param {number} threshold - On-target threshold
 * @param {number} deflErr - Deflection error
 * @param {number} elevErr - Elevation error
 * @returns {string} ASCII art target display
 */
export function generateTargetDisplay(error, threshold, deflErr, elevErr) {
    // Determine circle size based on threshold
    let radius;
    if (threshold >= 15) radius = 4;      // ILLUM - large circle
    else if (threshold >= 10) radius = 3; // SMOKE - medium circle
    else radius = 2;                       // HE - small circle
    
    const size = radius * 2 + 1;
    const center = radius;
    
    // Calculate hit position (0,0 = center, scaled by error/threshold)
    const errorRatio = Math.min(error / threshold, 1.5); // Cap at 1.5x for display
    // Use deflection and elevation errors to determine direction
    const angle = Math.atan2(elevErr, deflErr);
    const hitX = center + Math.round(errorRatio * radius * Math.cos(angle));
    const hitY = center + Math.round(errorRatio * radius * Math.sin(angle));
    
    // Build the grid
    let lines = [];
    for (let y = 0; y < size; y++) {
        let line = '';
        for (let x = 0; x < size; x++) {
            const dx = x - center;
            const dy = y - center;
            const dist = Math.sqrt(dx*dx + dy*dy);
            
            if (x === hitX && y === hitY) {
                line += error < threshold ? '◉' : '✕';  // Hit marker (◉=on target, ✕=miss)
            } else if (x === center && y === center && !(hitX === center && hitY === center)) {
                line += '+';  // Center crosshair
            } else if (Math.abs(dist - radius) < 0.6) {
                line += '·';  // Circle outline
            } else {
                line += ' ';
            }
        }
        lines.push(line);
    }
    
    // Add label
    const label = error < threshold ? '🎯 ON TARGET' : '📍 MISS';
    return label + '\n' + lines.join('\n');
}

/**
 * Calculate game statistics from mission results
 * @param {number[]} missionErrors - Array of error values
 * @param {boolean[]} missionHits - Array of hit/miss booleans
 * @param {number[]} missionTimes - Array of fire times in seconds
 * @returns {object} Game statistics
 */
export function calculateGameStats(missionErrors, missionHits, missionTimes) {
    const avgError = missionErrors.length > 0 
        ? missionErrors.reduce((a, b) => a + b, 0) / missionErrors.length 
        : 0;
    const totalTime = missionTimes.reduce((a, b) => a + b, 0);
    const onTargetCount = missionHits.filter(h => h === true).length;
    const missCount = missionHits.filter(h => h === false).length;
    const offTargetCount = missionErrors.filter(e => e >= 15 && e < 35).length;
    const dangerCount = missionErrors.filter(e => e >= 35).length;
    
    return {
        avgError,
        totalTime,
        onTargetCount,
        missCount,
        offTargetCount,
        dangerCount
    };
}

/**
 * Get performance rating based on average error
 * @param {number} avgError - Average error in mils
 * @returns {string} Rating emoji and text
 */
export function getGameRating(avgError) {
    if (avgError <= 10) return '🌟 EXCELLENT';
    if (avgError <= 20) return '⭐ GOOD';
    if (avgError <= 35) return '🟡 ACCEPTABLE';
    if (avgError <= 50) return '🟠 POOR';
    return '🔴 FAILING';
}

/**
 * Get fuze description for display
 * @param {string} roundType - 'HE', 'ILLUM', 'SMOKE'
 * @param {string} fuzeType - 'impact', 'proximity', 'delay'
 * @param {number} fuzeDelay - Delay in seconds
 * @returns {string} Human-readable fuze description
 */
export function getFuzeDescription(roundType, fuzeType, fuzeDelay) {
    if (roundType === 'ILLUM') {
        return `Timer: ${fuzeDelay}s (airburst over target)`;
    } else if (roundType === 'SMOKE') {
        return `Timer: ${fuzeDelay}s (ground deployment)`;
    } else if (roundType === 'HE') {
        if (fuzeType === 'proximity') {
            return 'Proximity fuze (area effect airburst)';
        } else if (fuzeType === 'delay') {
            return 'Delay fuze (penetration/entrenchment)';
        } else {
            return 'Impact fuze (surface fragmentation)';
        }
    }
    return '';
}
