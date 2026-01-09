<script>
    // Modal component - extracted from App.svelte
    // Props
    export let visible = false;
    export let title = '';
    export let content = '';
    export let type = 'info';  // 'info', 'success', 'warning', 'error'
    export let onClose = () => {};
    
    function handleOverlayClick() {
        onClose();
    }
    
    function handleContainerClick(e) {
        e.stopPropagation();
    }
</script>

<style>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.75);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        backdrop-filter: blur(2px);
    }

    .modal-container {
        background: linear-gradient(180deg, #3a4035 0%, #2d322a 100%);
        border-radius: 12px;
        min-width: 400px;
        max-width: 600px;
        max-height: 80vh;
        overflow: hidden;
        box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        border: 2px solid #4a4f42;
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 20px;
        border-bottom: 1px solid #4a4f42;
        background: rgba(0, 0, 0, 0.2);
    }

    .modal-title {
        margin: 0;
        font-size: 1.4rem;
        font-weight: bold;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    .modal-success .modal-title { color: #9ca041; }
    .modal-warning .modal-title { color: #c4a57b; }
    .modal-error .modal-title { color: #c45a5a; }
    .modal-info .modal-title { color: #7a9ec4; }

    .modal-close {
        background: none;
        border: none;
        color: #a39e8b;
        font-size: 1.8rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
        transition: color 0.2s;
    }

    .modal-close:hover {
        color: #d4d1c5;
    }

    .modal-content {
        padding: 20px;
        overflow-y: auto;
        max-height: 50vh;
    }

    .modal-text {
        margin: 0;
        font-family: 'Courier New', monospace;
        font-size: 0.95rem;
        line-height: 1.6;
        color: #d4d1c5;
        white-space: pre-wrap;
        word-wrap: break-word;
    }

    .modal-footer {
        padding: 16px 20px;
        border-top: 1px solid #4a4f42;
        display: flex;
        justify-content: flex-end;
        background: rgba(0, 0, 0, 0.15);
    }

    .modal-button {
        background: linear-gradient(180deg, #5a6052 0%, #4a4f42 100%);
        color: #d4d1c5;
        border: 1px solid #6a7062;
        padding: 10px 32px;
        border-radius: 6px;
        font-size: 1rem;
        font-weight: bold;
        letter-spacing: 1px;
        cursor: pointer;
        transition: all 0.2s;
    }

    .modal-button:hover {
        background: linear-gradient(180deg, #6a7062 0%, #5a6052 100%);
        border-color: #7a8072;
    }

    .modal-success .modal-button {
        background: linear-gradient(180deg, #4a5a3a 0%, #3a4a2a 100%);
        border-color: #5a6a4a;
    }

    .modal-success .modal-button:hover {
        background: linear-gradient(180deg, #5a6a4a 0%, #4a5a3a 100%);
    }
</style>

{#if visible}
    <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
    <div class="modal-overlay" on:click={handleOverlayClick}>
        <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
        <div class="modal-container modal-{type}" on:click={handleContainerClick}>
            <div class="modal-header">
                <h2 class="modal-title">{title}</h2>
                <button class="modal-close" on:click={onClose}>×</button>
            </div>
            <div class="modal-content">
                <pre class="modal-text">{content}</pre>
            </div>
            <div class="modal-footer">
                <button class="modal-button" on:click={onClose}>OK</button>
            </div>
        </div>
    </div>
{/if}
