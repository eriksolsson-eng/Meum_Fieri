# Mortar Duty – Context Pack

## 1. Project Goal

Build a **single-weapon training game/simulator** that recreates the Swedish 8 cm mortar’s **sighting and firing process**, with emphasis on:

- **Authentic sighting mechanics**
  - Optical sight with parallax between **front/back aiming sticks** and a fixed reticle
  - Separate **sight vs. mortar** controls:
    - Sight: `sightDeflection`, `sightElevation`
    - Mortar: `bipodPosition`, `bipodElevation`, `deflectionCrank`, `elevationCrank`
- **Procedural fire missions**
  - Each game = **3 missions**
  - One round per mission, then move to the next
  - Target parameters: deflection, elevation, charge, round type, fuze/timer
- **Visual, not numerical, feedback**
  - Player aligns sticks and levels using **visual indicators** (sticks, spirit levels, dials) instead of reading pure numbers
- **“Feel” like a real optic, not a UI**
  - Parallax, limited mechanical ranges, and coupled effects (e.g. deflection affecting cross-level, elevation coupling) should constrain the player in a way that matches real equipment
- **Deployment**
  - Runs in browser for development
  - Packaged as a **desktop app** (Tauri) so you can play without a browser
  - Eventually: Windows `.exe` build from the same codebase

---

## 2. Tech Stack

**Core Frontend**

- **Framework:** Svelte (component-based, reactive)
- **Build Tool / Dev Server:** Vite
- **Language:** JavaScript/TypeScript style Svelte components (`.svelte`, `.js`)
- **Styling:** Plain CSS (no external CSS framework)
- **Graphics:**
  - Custom **PNG assets** (e.g. `background.png`, `sight_small.png`, `front_stick.png`, `back_stick.png`, `sight_lateral_*`, elevation/lateral dials, etc.)
  - Layout heavily driven by **absolute positioning** and `transform` for precise visual alignment

**Desktop Packaging**

- **Tauri 2.x**
  - **Rust** backend (in `src-tauri/src/`)
  - Tauri config in `src-tauri/tauri.conf.json`
  - Produces:
    - `.AppImage` (portable Linux binary)
    - `.deb` and `.rpm` packages
  - Planned: Windows `.msi` / `.exe` from the same Tauri config on a Windows machine

**Project Structure (high level)**

- `src/App.svelte` – main game logic and layout
- `src/components/` – main UI components:
  - `SightView.svelte` – parallax sight + sticks
  - `SpiritLevels.svelte` – HORIZONTAL/ELEVATION levels
  - `DeflectionIndicator.svelte` – crank extension bar/indicator
  - `CrankControls.svelte` – deflection & elevation crank controls
  - `ElevationCoarse.svelte`, `ElevationFine.svelte`, `ElevationKnob.svelte`
  - `LateralCoarse.svelte`, `LateralFine.svelte`, `LateralKnob.svelte`
  - `MissionControls.svelte` – fire mission setup & game flow
  - `StatusDisplay.svelte` – textual status & debug-style readouts
- `assets/graphics/` – all sight, stick, dial, and panel graphics
- `vite.config.js` – Vite + static asset config
- `src-tauri/` – Tauri (Rust) app wrapper and build configuration

---

## 3. Current State (What Actually Works Now)

### 3.1 Core Game Logic

- **Game loop**
  - Predefined `gameMissions` array with **3 missions** per game.
  - Each mission defines:
    - `deflection`, `elevation`, `charge`, `roundType`, `fuzeType`, `fuzeDelay`.
  - State in `App.svelte`:
    - `sightDeflection`, `sightElevation`
    - `bipodPosition`, `deflectionCrank`
    - `bipodElevation`, `elevationCrank`
    - `crossLevelAngle`, `totalElevationOffset`, etc.
  - Game state:
    - `currentMissionIndex`, `gameActive`, `missionsPerGame`
    - Ammunition inventory and round counters

- **Deflection & Elevation Mechanics**
  - Parallax and movement constants are tuned:
    - `SIGHT_PARALLAX_PX_PER_MIL = 0.235`
    - `DEFLECTION_CRANK_PX_PER_MIL = 1.8`
    - Separate parallax factors for front/back sticks and background
  - **LateralFine / LateralCoarse**
    - `LateralFine`:
      - Dial rotates **counter-clockwise** with increasing `sightDeflection`
      - `FINE_ROTATION_RANGE = 100` mils per full rotation
    - `LateralCoarse`:
      - Scrolls main lateral scale horizontally
      - Increasing `sightDeflection` moves numbers **left**
      - Scroll factor tuned to `DEFLECTION_SCROLL_FACTOR = 0.495`
  - **ElevationFine / ElevationCoarse**
    - Similar architecture: coarse background scale + fine dial
    - Elevation movement is inverted visually (higher elevation => view pans “down” over terrain)

- **Combined Movement**
  - Background movement is composed of:
    - `sightBackgroundMovement`
    + combined `bipodPosition + deflectionCrank`
  - Sticks use:
    - Background movement
    + scaled parallax offsets
  - Elevation affects vertical offsets for background, front stick, back stick with different parallax factors.

### 3.2 Visual Components

- **SightView.svelte**
  - 1800×1800 **fixed sight container**, matched to scaled `sight_small.png`.
  - Layers:
    - Background: `/graphics/background.png`, wide 300% width for panning.
    - Sight overlay: `/graphics/sight_small.png`, centered and fixed.
    - Front stick: `/graphics/front_stick.png` with stronger parallax (moves more, nearer).
    - Back stick: `/graphics/back_stick.png` with weaker parallax (moves less, farther).
  - Vertical alignment:
    - Sticks are anchored with `bottom: 0; transform: translateX(-50%)` per your stick alignment rule.

- **SpiritLevels.svelte**
  - Two spirit levels:
    - **HORIZONTAL LEVEL**
    - **ELEVATION LEVEL**
  - Bubbles move based on combined crank + terrain + coupling logic from `App.svelte`.

- **DeflectionIndicator.svelte**
  - Visual “piston/extension” bar representing deflection crank usage.
  - Uses color zones and length to show near-limit vs safe region.

- **CrankControls.svelte**
  - UI for adjusting:
    - Deflection crank
    - Elevation crank
    - Rough deflection/elevation (bipod)
  - Buttons/controls are wired and affect the same state used by SightView and indicators.

- **MissionControls.svelte**
  - Displays and manages:
    - Target deflection/elevation
    - Charge, round type, fuze type, timer
    - Rounds to fire
  - Input for sight settings:
    - Numeric fields for `sightDeflection` and `sightElevation`
    - Uses defined step sizes: `deflectionGranularity`, `elevationGranularity`, `crankGranularity`.

- **StatusDisplay.svelte**
  - Shows current:
    - Deflection/elevation settings
    - Crank positions
    - Some derived values (like `mortarElevation`, etc.)
  - Used mostly for debugging/awareness, not primary player feedback.

- **Elevation / Lateral Coarse & Fine Components**
  - `ElevationCoarse` & `ElevationFine`:
    - Render elevation scales/dials using graphics in `/graphics`.
    - Movement hooked to `sightElevation` and/or derived elevation values.
  - `LateralCoarse` & `LateralFine`:
    - Coarse scroll and fine rotation both successfully tuned and visually aligned.
    - Positioned in `App.svelte` with hard-coded pixel offsets to avoid transform-origin surprises.
    - Bottom alignment between LateralFine and LateralCoarse is **explicitly locked** with pixel math.

### 3.3 Packaging / Builds

- **Web build**
  - `npm run dev` – dev server works.
  - `npm run build` – produces `dist/` with:
    - `index.html`
    - `assets/` (hashed JS/CSS)
    - `graphics/` (all PNG assets copied from `assets/graphics/` via Vite `publicDir` settings).

- **Linux desktop builds via Tauri**
  - Rust and Tauri successfully installed and configured.
  - Tauri config (`src-tauri/tauri.conf.json`) includes:
    - Window sizing for 1600×1000 (ish) main window.
    - `bundle.resources` pointing to `../assets/**/*` so graphics are available in the packaged app.
  - `npx tauri build` produces:
    - `.AppImage`:  
      `src-tauri/target/release/bundle/appimage/Mortar Duty_0.1.0_amd64.AppImage`
    - `.deb`:  
      `src-tauri/target/release/bundle/deb/Mortar Duty_0.1.0_amd64.deb`
    - `.rpm`:  
      `src-tauri/target/release/bundle/rpm/Mortar Duty-0.1.0-1.x86_64.rpm`
  - Assets are now correctly included; control panel + sight + other graphics load in the Linux AppImage/DEB builds.

- **Windows build – planned state**
  - Configuration is Tauri-based and portable.
  - For Windows you will:
    - Copy the project (without `node_modules` and `src-tauri/target`) to a Windows machine.
    - Install Node.js and Rust there.
    - Run:
      ```bash
      npm install
      npm run build
      npx tauri build