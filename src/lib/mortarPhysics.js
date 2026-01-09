/**
 * Mortar physics calculation functions
 * Pure functions for parallax, spirit levels, and aiming geometry
 */

// ===== DEFLECTION & PARALLAX =====

/**
 * Calculate background movement from sight deflection
 * @param {number} sightDeflection - Sight deflection in mils
 * @param {number} pxPerMil - Pixels per mil conversion factor
 * @returns {number} Background movement in pixels
 */
export function calcSightBackgroundMovement(sightDeflection, pxPerMil) {
    return -sightDeflection * pxPerMil;
}

/**
 * Calculate total deflection movement from bipod + crank
 * @param {number} bipodPosition - Bipod position in mils
 * @param {number} deflectionCrank - Deflection crank in mils
 * @param {number} pxPerMil - Pixels per mil conversion factor
 * @returns {number} Total deflection movement in pixels
 */
export function calcDeflectionMovement(bipodPosition, deflectionCrank, pxPerMil) {
    return -(bipodPosition + deflectionCrank) * pxPerMil;
}

/**
 * Calculate deflection parallax offset
 * @param {number} bipodPosition - Bipod position in mils
 * @param {number} deflectionCrank - Deflection crank in mils
 * @param {number} parallaxPxPerMil - Parallax pixels per mil
 * @returns {number} Parallax offset in pixels
 */
export function calcDeflectionParallax(bipodPosition, deflectionCrank, parallaxPxPerMil) {
    return (bipodPosition + deflectionCrank) * parallaxPxPerMil;
}

/**
 * Calculate stick movement (front or back)
 * @param {number} backgroundMovement - Combined background movement
 * @param {number} parallaxOffset - Deflection parallax offset
 * @param {number} parallaxFactor - Stick parallax factor (FRONT=1.0, BACK=0.5)
 * @param {number} levelCompensation - Level compensation deflection
 * @returns {number} Stick movement in pixels
 */
export function calcStickMovement(backgroundMovement, parallaxOffset, parallaxFactor, levelCompensation) {
    return backgroundMovement + (parallaxOffset * parallaxFactor) + levelCompensation;
}

// ===== ELEVATION =====

/**
 * Calculate elevation offset from reference
 * @param {number} sightElevation - Sight elevation setting
 * @param {number} bipodElevation - Bipod elevation adjustment
 * @param {number} elevationCrank - Elevation crank setting
 * @param {number} referenceElevation - Reference elevation (typically 350)
 * @returns {number} Total elevation offset from reference
 */
export function calcElevationOffset(sightElevation, bipodElevation, elevationCrank, referenceElevation) {
    return sightElevation + bipodElevation - referenceElevation + elevationCrank;
}

/**
 * Calculate elevation shift for an element
 * Higher elevation = look DOWN (negative shift)
 * @param {number} elevationOffset - Elevation offset from reference
 * @param {number} sensitivity - Elevation sensitivity factor
 * @param {number} parallaxFactor - Element-specific parallax factor
 * @returns {number} Vertical shift in pixels
 */
export function calcElevationShift(elevationOffset, sensitivity, parallaxFactor) {
    return -elevationOffset * sensitivity * parallaxFactor;
}

/**
 * Calculate mortar tube elevation
 * @param {number} referenceElevation - Reference elevation (350)
 * @param {number} bipodElevation - Bipod elevation adjustment
 * @param {number} elevationCrank - Elevation crank setting
 * @returns {number} Actual mortar tube elevation in mils
 */
export function calcMortarElevation(referenceElevation, bipodElevation, elevationCrank) {
    return referenceElevation + bipodElevation + elevationCrank;
}

// ===== SPIRIT LEVEL PHYSICS =====

/**
 * Calculate deflection crank's lateral effect on spirit level
 * Quadratic curve - gentle at center, sharp at edges
 * @param {number} deflectionCrank - Deflection crank position
 * @param {number} maxCrankForEffect - Crank value where effect maxes (default 25)
 * @param {number} maxEffect - Maximum effect magnitude (default 100)
 * @returns {number} Lateral effect on bubble
 */
export function calcDeflectionLateralEffect(deflectionCrank, maxCrankForEffect = 25, maxEffect = 100) {
    const crankRatio = Math.max(-1, Math.min(1, deflectionCrank / maxCrankForEffect));
    return -Math.sign(crankRatio) * Math.pow(Math.abs(crankRatio), 2) * maxEffect;
}

/**
 * Calculate elevation coupling effect on lateral bubble
 * @param {number} mortarElevation - Current mortar elevation
 * @param {number} referenceElevation - Reference elevation
 * @param {number} couplingFactor - Random coupling factor (0.01-0.04)
 * @returns {number} Lateral effect from elevation
 */
export function calcElevationLateralEffect(mortarElevation, referenceElevation, couplingFactor) {
    const elevationOffset = mortarElevation - referenceElevation;
    return elevationOffset * couplingFactor;
}

/**
 * Calculate lateral bubble position (unclamped)
 * @param {number} crossLevelAngle - Cross level angle
 * @param {number} environmentalTilt - Environmental tilt from terrain
 * @param {number} elevationLateralEffect - Elevation coupling effect
 * @param {number} deflectionLateralEffect - Deflection crank effect
 * @param {number} levelSensitivity - Bubble sensitivity factor
 * @returns {number} Lateral bubble position in pixels
 */
export function calcLateralBubble(
    crossLevelAngle,
    environmentalTilt,
    elevationLateralEffect,
    deflectionLateralEffect,
    levelSensitivity
) {
    // Cross-level has 3x effect ratio
    return (-crossLevelAngle * 3 + environmentalTilt + elevationLateralEffect + deflectionLateralEffect) * levelSensitivity;
}

/**
 * Calculate elevation bubble position (unclamped)
 * Bubble centers when sight matches mortar tube angle
 * @param {number} sightElevation - Sight elevation setting
 * @param {number} referenceElevation - Reference elevation
 * @param {number} bipodElevation - Bipod elevation adjustment
 * @param {number} elevationCrank - Elevation crank setting
 * @param {number} levelSensitivity - Bubble sensitivity factor
 * @returns {number} Elevation bubble position in pixels
 */
export function calcElevationBubble(
    sightElevation,
    referenceElevation,
    bipodElevation,
    elevationCrank,
    levelSensitivity
) {
    const longitudinalEffect = sightElevation - (referenceElevation + bipodElevation + elevationCrank);
    return longitudinalEffect * levelSensitivity;
}

/**
 * Clamp bubble position to spirit level boundaries
 * @param {number} bubblePos - Unclamped bubble position
 * @param {number} maxTravel - Maximum bubble travel distance
 * @returns {number} Clamped bubble position
 */
export function clampBubblePosition(bubblePos, maxTravel) {
    return Math.max(-maxTravel, Math.min(maxTravel, bubblePos));
}

// ===== ALIGNMENT & CONDITIONS =====

/**
 * Calculate parallax symmetry error
 * Distance from crosshair to back stick should equal back-to-front distance
 * @param {number} frontStickMovement - Front stick position
 * @param {number} backStickMovement - Back stick position
 * @returns {number} Symmetry error in pixels
 */
export function calcSymmetryError(frontStickMovement, backStickMovement) {
    const crosshairPos = 0;
    const distanceToBack = Math.abs(backStickMovement - crosshairPos);
    const distanceBackToFront = Math.abs(frontStickMovement - backStickMovement);
    return Math.abs(distanceToBack - distanceBackToFront);
}

/**
 * Check if mortar is registered (zeroed)
 * @param {object} params - Registration parameters
 * @returns {boolean} True if registered
 */
export function checkRegistration({
    frontStickMovement,
    backStickMovement,
    lateralBubblePos,
    elevationBubblePos,
    sightDeflection,
    sightElevation,
    referenceElevation,
    alignmentTolerance,
    lateralTolerance,
    elevationTolerance
}) {
    const symmetryError = calcSymmetryError(frontStickMovement, backStickMovement);
    
    return symmetryError < alignmentTolerance &&
           Math.abs(lateralBubblePos) < lateralTolerance &&
           Math.abs(elevationBubblePos) < elevationTolerance &&
           sightDeflection === 0 &&
           sightElevation === referenceElevation;
}

/**
 * Check if mortar is laid on target
 * @param {object} params - Laid check parameters
 * @returns {boolean} True if laid correctly
 */
export function checkLaid({
    frontStickMovement,
    backStickMovement,
    lateralBubblePos,
    elevationBubblePos,
    sightDeflection,
    targetDeflection,
    sightElevation,
    targetElevation,
    alignmentTolerance,
    lateralTolerance,
    elevationTolerance
}) {
    const symmetryError = calcSymmetryError(frontStickMovement, backStickMovement);
    
    return symmetryError < alignmentTolerance &&
           Math.abs(lateralBubblePos) < lateralTolerance &&
           Math.abs(elevationBubblePos) < elevationTolerance &&
           sightDeflection === targetDeflection &&
           sightElevation === targetElevation;
}

/**
 * Calculate deflection crank position as percentage (for visual indicator)
 * @param {number} deflectionCrank - Current crank position
 * @param {number} minCrank - Minimum crank value
 * @param {number} maxCrank - Maximum crank value
 * @returns {number} Percentage 0-1
 */
export function calcCrankPercent(deflectionCrank, minCrank, maxCrank) {
    return (deflectionCrank - minCrank) / (maxCrank - minCrank);
}

/**
 * Generate random rough adjustment error
 * @param {number} minError - Minimum error magnitude (default 2)
 * @param {number} maxError - Maximum error magnitude (default 10)
 * @returns {number} Random error with random sign
 */
export function generateRoughError(minError = 2, maxError = 10) {
    const magnitude = Math.random() * (maxError - minError) + minError;
    const sign = Math.random() > 0.5 ? 1 : -1;
    return magnitude * sign;
}

/**
 * Generate random ground variation from rough adjustment
 * @param {number} range - Variation range (default ±3)
 * @returns {number} Random ground variation
 */
export function generateGroundVariation(range = 3) {
    return (Math.random() * range * 2) - range;
}
