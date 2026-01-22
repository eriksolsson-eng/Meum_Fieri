<script>
  import { appState } from './state.svelte.js';

  // PRD §3.3: Status descriptions per ScraperState
  const statusMessages = [
    { step: 0, title: 'Ready', description: 'Upload an image to begin' },
    { step: 1, title: 'Layer 1: InkLayerA', description: 'Applying first color screen...' },
    { step: 2, title: 'Layer 2: InkLayerB', description: 'Overlaying second color...' },
    { step: 3, title: 'Layer 3: InkLayerC', description: 'Adding third color layer...' },
    { step: 4, title: 'Layer 4: WhiteLayer', description: 'Final highlights applied' }
  ];

  const currentStatus = $derived(statusMessages[appState.scraperPosition] || statusMessages[0]);
</script>

<div class="status-panel">
  <div class="step-indicator">
    Step {appState.scraperPosition} of 4
  </div>
  <h4>{currentStatus.title}</h4>
  <p>{currentStatus.description}</p>
  
  <div class="progress-dots">
    {#each statusMessages as _, i}
      <span 
        class="dot" 
        class:active={i <= appState.scraperPosition}
        class:current={i === appState.scraperPosition}
      ></span>
    {/each}
  </div>
</div>

<style>
  .status-panel {
    padding: 16px;
    background: #1a1a1a;
    border-radius: 8px;
    text-align: center;
  }

  .step-indicator {
    font-size: 0.75rem;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 8px;
  }

  h4 {
    margin: 0 0 4px 0;
    font-size: 1rem;
    color: #fff;
  }

  p {
    margin: 0 0 16px 0;
    font-size: 0.875rem;
    color: #888;
  }

  .progress-dots {
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #333;
    transition: background 0.2s, transform 0.2s;
  }

  .dot.active {
    background: #4a9eff;
  }

  .dot.current {
    transform: scale(1.3);
    background: #fff;
  }
</style>
