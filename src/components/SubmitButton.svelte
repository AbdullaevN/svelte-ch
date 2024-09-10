<script>
  export let color = '#374249'; // Цвет фона кнопки по умолчанию
  export let onClick = () => {};
</script>

<button style="background-color: {color};" on:click={onClick} class="button">
  <span class="button-text">Send</span>
</button>

<style>
  .button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 40px;
    gap: 10px;
    width: 121px;
    height: 42px;
    background: #374249;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .button:hover {
    background: #1b1e2e; /* Цвет кнопки при наведении */
  }

  .button-text {
    width: 41px;
    height: 22px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px; /* Соответствует высоте текста */
    color: rgba(255, 255, 255, 0.7);
  }
</style>
