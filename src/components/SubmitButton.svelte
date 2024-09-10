<script>
  export let color = '#374249'; // Цвет фона кнопки по умолчанию
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
    border-radius: 25px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #1b1e2e; /* Цвет кнопки при наведении */
  }
</style>
