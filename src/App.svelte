<script>
  import InputField from './components/InputField.svelte';
  import Checkbox from './components/Checkbox.svelte';
  import SubmitButton from './components/SubmitButton.svelte';
  import './formStyles.css'
  
  let name = '';
  let company = '';
  let email = '';
  let phone = '';
  let subject = '';
  let message = '';
  let isChecked = false;
  let errors = {};
  let successMessage = '';

  function validateForm() {
    errors = {};
    if (!name) errors.name = 'Имя обязательно';
    if (!company) errors.company = 'Компания обязательна';
    if (!email || !/\S+@\S+\.\S+/.test(email)) errors.email = 'Некорректный email';
    if (!message) errors.message = 'Сообщение обязательно';
    return Object.keys(errors).length === 0;
  }

  function handleSubmit() {
    if (validateForm() && isChecked) {
      // Имитация отправки данных
      setTimeout(() => {
        successMessage = 'Данные успешно отправлены';
        setTimeout(() => successMessage = '', 3000);

  let name = '';
  let company = '';
  let email = '';
  let phone = '';
  let subject = '';
  let message = '';

      }, 1000);
    }
  }
</script>

<form class="form" on:submit|preventDefault={handleSubmit}>
  <InputField type="text" placeholder="Имя*" value={name} onInput={e => name = e.target.value} error={errors.name} />
  <InputField type="text" placeholder="Компания*" value={company} onInput={e => company = e.target.value} error={errors.company} />
  <InputField type="email" placeholder="Электронная почта*" value={email} onInput={e => email = e.target.value} error={errors.email} />
  <InputField type="tel" placeholder="Телефон" value={phone} onInput={e => phone = e.target.value} />
  <InputField type="text" placeholder="Тема*" value={subject} onInput={e => subject = e.target.value} />
  <InputField type="text" placeholder="Сообщение*" value={message} onInput={e => message = e.target.value} error={errors.message} />

    <div class="checkbox-container">
    <Checkbox checked={isChecked} onChange={e => isChecked = e.target.checked} />
    <label for="terms-checkbox">
      I accept <a href="#" class="terms-link">Terms and Privacy Policy</a>   
    </label>
  </div>


  <SubmitButton color="#374249" onClick={handleSubmit} />

  {#if successMessage}
    <div class="notification" on:click={() => successMessage = ''}>
      {successMessage}
      <button class="close-btn" on:click={() => successMessage = ''}>×</button>
    </div>
  {/if}
</form>

<style>
  .form {
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin: 0 auto; /* Горизонтальное центрирование */
  padding: 20px; /* Уменьшено для меньших экранов */
  gap: 10px;
  width: 90%; /* Ширина формы теперь 90% от ширины экрана */
  max-width: 390px; /* Ограничиваем максимальную ширину */
  background: #171929;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.7);
  border-radius: 27px;
  }
  
  .notification {
    background: #28a745;
    color: white;
    padding: 12px;
    border-radius: 4px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    transition: opacity 0.5s;
    animation: fade-in 0.5s ease-out;
  }
  
  .notification.fade-out {
    opacity: 0;
  }
  
  .close-btn {
    background: none;
    border: none;
    color: white;
    font-size: 1.2em;
    cursor: pointer;
  }
  
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
