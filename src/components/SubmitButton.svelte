<script>
  export let color = 'var(--primary-color)';
  export let onClick;
</script>

<button
  style={`background-color: ${color};`}
  on:click={onClick}
>
  Send
</button>

<style>
  button {
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  button:hover {
    background-color: var(--secondary-color);
  }
</style>
