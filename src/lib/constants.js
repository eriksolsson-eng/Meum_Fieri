/**
 * Mortar Duty - Game Constants
 * 
 * All magic numbers, limits, and configuration values.
 * Extracted from App.svelte for maintainability.
 */

// =============================================================================
// REFERENCE VALUES
// =============================================================================
export const REFERENCE_ELEVATION = 350;   // Reference elevation where spirit level is neutral (mils)

// =============================================================================
// PARALLAX AIMING MECHANICS - CRITICAL VALUES
// =============================================================================
// PHYSICAL LAYOUT (front to back):
//   1. Sight/Crosshair (fixed at center, z-index 4)
//   2. Front stick - RED, shorter/thinner, CLOSER to mortar (z-index 3)
//   3. Back stick - YELLOW, taller/thicker, FARTHER from mortar (z-index 2)
//   4. Background terrain (z-index 1)
//
// PARALLAX BEHAVIOR:
//   - Front stick (closer): Moves MORE (1.0x parallax factor)
//   - Back stick (farther): Moves LESS (0.5x parallax factor)
//
// CHANGING THESE VALUES WILL BREAK THE AIMING SYSTEM!

export const SIGHT_PARALLAX_PX_PER_MIL = 0.29;   // Parallax sensitivity for 1100px container
export const DEFLECTION_CRANK_PX_PER_MIL = 1.8;  // Background movement - adjusted for 1800px container
export const FRONT_PARALLAX = 1.0;               // Front stick: full parallax offset (moves MORE)
export const BACK_PARALLAX = 0.5;                // Back stick: half parallax offset (moves LESS)

// ELEVATION PARALLAX: Different vertical movement rates
export const BACKGROUND_ELEVATION_PARALLAX = 0.4;   // Background moves most
export const BACK_STICK_ELEVATION_PARALLAX = 0.2;   // Back stick intermediate
export const FRONT_STICK_ELEVATION_PARALLAX = 0.1;  // Front stick moves least
// Sight stays fixed (0.0 parallax)

// =============================================================================
// SENSITIVITY VALUES
// =============================================================================
export const DEFLECTION_SENSITIVITY = DEFLECTION_CRANK_PX_PER_MIL;  // For background movement
export const ELEVATION_SENSITIVITY = 0.5;   // Vertical movement per mil of elevation change
export const LEVEL_SENSITIVITY = 1.0;       // Bubble movement multiplier for cross-level

// =============================================================================
// GRANULARITY / STEP SIZE
// =============================================================================
export const deflectionGranularity = 1;      // 1 mil per click
export const elevationGranularity = 1;       // 1 mil per click
export const crankGranularity = 1;           // 1 mil per crank turn
export const roughDeflectionStep = 150;      // 150 mils per rough adjustment (bipod movement) - large
export const roughDeflectionStepMedium = 60; // 60 mils per medium rough adjustment

// =============================================================================
// MECHANICAL LIMITS
// =============================================================================

// Deflection Crank (Extension Piston)
export const DEFLECTION_CRANK_MIN = -50;     // Extension piston minimum (±50 mils max travel)
export const DEFLECTION_CRANK_MAX = 50;      // Extension piston maximum (±50 mils max travel)

// Elevation Crank
export const ELEVATION_CRANK_MIN = -250;     // Elevation crank minimum
export const ELEVATION_CRANK_MAX = 250;      // Elevation crank maximum

// Cross-Level
export const CROSS_LEVEL_MIN = -60;          // Cross-level minimum
export const CROSS_LEVEL_MAX = 60;           // Cross-level maximum

// Bipod Elevation (Leg Spread)
export const BIPOD_ELEVATION_MIN = -150;     // Bipod leg minimum (compressed)
export const BIPOD_ELEVATION_MAX = 150;      // Bipod leg maximum (extended)

// =============================================================================
// SPIRIT LEVEL CONSTRAINTS
// =============================================================================
// Spirit level: 200px wide, bubble: 100px wide
// Max travel: (200 - 100) / 2 = 50px from center
export const BUBBLE_MAX_TRAVEL = 50;         // pixels

// =============================================================================
// SUCCESS CONDITION TOLERANCES
// =============================================================================
export const ALIGNMENT_TOLERANCE = 8;        // Pixels - relaxed for less exact isLaid detection
export const LATERAL_LEVEL_TOLERANCE = 20;   // Pixels - horizontal spirit level tolerance
export const ELEVATION_LEVEL_TOLERANCE = 10; // Pixels - longitudinal spirit level tolerance
// Sight settings require EXACT match - no tolerance (fire mission data is absolute)

// =============================================================================
// GAME MISSIONS DATA
// =============================================================================
export const gameMissions = [
    // Mission 1: Minimal adjustment - close to starting position (350 elev, 0 defl)
    { deflection: 10, elevation: 360, charge: 3, roundType: 'HE', fuzeType: 'impact', fuzeDelay: 0 },
    // Mission 2: Small adjustment
    { deflection: -15, elevation: 340, charge: 3, roundType: 'SMOKE', fuzeType: null, fuzeDelay: 12 },
    // Mission 3: Small adjustment
    { deflection: 20, elevation: 370, charge: 3, roundType: 'ILLUM', fuzeType: null, fuzeDelay: 18 }
];
