<script>
  export let type = 'text';
  export let placeholder = '';
  export let value = '';
  export let onInput;
  export let error = '';

  function handleInput(event) {
    onInput(event);
  }
</script>

<div class="input-container">
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    on:input={handleInput}
    class="input-field"
  />
  {#if error}
    <span class="error">{error}</span>
  {/if}
</div>

<style>
  .input-container {
    margin-bottom: 16px;
  }
  .input-field {
    width: 100%;
    padding: 12px;
    border: 1px solid var(--primary-color);
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
    color: var(--text-color);
    background-color: #fff;
  }
  .input-field:focus {
    border-color: var(--secondary-color);
    outline: none;
  }
  .error {
    color: red;
    font-size: 0.875em;
  }
</style>
