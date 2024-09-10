<script>
  export let type = 'text'; // По умолчанию тип 'text'
  export let placeholder = '';
  export let value = '';
  export let error = '';
</script>

<div class="input-container">
  {#if type === 'text'}
    <input
      type="text"
      placeholder={placeholder}
      bind:value
    />
  {:else if type === 'email'}
    <input
      type="email"
      placeholder={placeholder}
      bind:value
    />
  {:else if type === 'tel'}
    <input
      type="tel"
      placeholder={placeholder}
      bind:value
    />
  {/if}
  {#if error}
    <span class="error-message">{error}</span>
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
  color: #000;
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

.error-message {
  color: red;
  font-size: 0.875em;
  margin-top: 4px;
}

</style>
