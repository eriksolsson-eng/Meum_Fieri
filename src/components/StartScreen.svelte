<script>
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();
    
    function selectTraining() {
        dispatch('modeselect', { mode: 'training' });
    }
    
    function selectSimulation() {
        dispatch('modeselect', { mode: 'simulation' });
    }
</script>

<div class="start-screen">
    <div class="overlay">
        <h1 class="title">MORTAR DUTY</h1>
        <div class="subtitle">Fire Control Simulator</div>
        
        <div class="button-container">
            <button class="mode-button training" on:click={selectTraining}>
                TRAINING
            </button>
            <button class="mode-button simulation" on:click={selectSimulation}>
                SIMULATION
            </button>
        </div>
    </div>
</div>

<style>
    .start-screen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-image: url('/graphics/Start_screen.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: 9999;
    }
    
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.4);
    }
    
    .title {
        font-family: 'Arial Black', Helvetica, sans-serif;
        font-size: 72px;
        font-weight: 900;
        color: #c8b896;
        text-shadow: 
            4px 4px 8px rgba(0, 0, 0, 0.8),
            0 0 30px rgba(0, 0, 0, 0.5);
        margin: 0;
        letter-spacing: 8px;
    }
    
    .subtitle {
        font-family: 'Arial', Helvetica, sans-serif;
        font-size: 24px;
        color: #a09080;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
        margin-top: 10px;
        margin-bottom: 60px;
        letter-spacing: 4px;
    }
    
    .button-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    .mode-button {
        width: 280px;
        padding: 18px 40px;
        font-family: 'Arial', Helvetica, sans-serif;
        font-size: 22px;
        font-weight: bold;
        letter-spacing: 3px;
        border: 3px solid #c8b896;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s ease;
        text-transform: uppercase;
    }
    
    .mode-button.training {
        background: linear-gradient(180deg, #4a5d4a 0%, #3a4a3a 100%);
        color: #c8b896;
    }
    
    .mode-button.training:hover {
        background: linear-gradient(180deg, #5a6d5a 0%, #4a5a4a 100%);
        border-color: #d8c8a6;
        transform: scale(1.02);
    }
    
    .mode-button.simulation {
        background: linear-gradient(180deg, #5d4a4a 0%, #4a3a3a 100%);
        color: #c8b896;
    }
    
    .mode-button.simulation:hover {
        background: linear-gradient(180deg, #6d5a5a 0%, #5a4a4a 100%);
        border-color: #d8c8a6;
        transform: scale(1.02);
    }
    
    .mode-button:active {
        transform: scale(0.98);
    }
</style>
