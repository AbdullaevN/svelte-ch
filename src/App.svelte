<script>
  import InputField from './components/InputField.svelte';
  import Checkbox from './components/Checkbox.svelte';
  import SubmitButton from './components/SubmitButton.svelte';
  
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
      }, 1000);
    }
  }
</script>

<form class="form" on:submit|preventDefault={handleSubmit}>
  <InputField type="text" placeholder="Имя" value={name} onInput={e => name = e.target.value} error={errors.name} />
  <InputField type="text" placeholder="Компания" value={company} onInput={e => company = e.target.value} error={errors.company} />
  <InputField type="email" placeholder="Электронная почта" value={email} onInput={e => email = e.target.value} error={errors.email} />
  <InputField type="tel" placeholder="Телефон" value={phone} onInput={e => phone = e.target.value} />
  <InputField type="text" placeholder="Тема" value={subject} onInput={e => subject = e.target.value} />
  <InputField type="text" placeholder="Сообщение" value={message} onInput={e => message = e.target.value} error={errors.message} />

  <Checkbox checked={isChecked} onChange={e => isChecked = e.target.checked} />

  <SubmitButton color="var(--primary-color)" onClick={handleSubmit} />

  {#if successMessage}
    <div class="notification" on:click={() => successMessage = ''}>
      {successMessage}
      <button class="close-btn" on:click={() => successMessage = ''}>×</button>
    </div>
  {/if}
</form>

<style>
  .form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .notification {
    background: var(--secondary-color);
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

  .notification button {
    background: none;
    border: none;
    color: white;
    font-size: 1.2em;
    cursor: pointer;
  }
  /* Добавьте в стиль уведомления в App.svelte */
.notification {
  animation: fade-in 0.5s ease-out;
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
