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
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-bottom: 20px;
}

.input-container input {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 0px 6px;
  gap: 5px;
  width: 100%;
  height: 51px;
  border: none; /* Убираем стандартные границы */
    border-bottom: 2px solid #3F4363; /* Нижняя граница по умолчанию */

  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #fff;
  background: none;
  position: relative; /* Для позиционирования псевдоэлемента */
}

.input-container input::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #3F4363; /* Цвет нижней линии по умолчанию */
  transition: background-color 0.3s; /* Плавный переход цвета */
}

.input-container input:focus::after {
  background-color: #FFFFFF; /* Цвет нижней линии при фокусе */
}

.input-container input:focus {
  color: #FFFFFF; /* Цвет текста при фокусе */
}

.input-container input:focus::placeholder {
  color: #FFFFFF; /* Цвет плейсхолдера при фокусе */
}

.error {
  color: red;
  font-size: 0.875em;
  margin-top: 4px;
}

</style>
