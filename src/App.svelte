<script>
  import InputField from './components/InputField.svelte';
  import Checkbox from './components/Checkbox.svelte';
  import SubmitButton from './components/SubmitButton.svelte';
  import './formStyles.css'; // Импортируем стили

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

        name = '';
        company = '';
        email = '';
        phone = '';
        subject = '';
        message = '';
        isChecked = false;
      }, 1000);
    }
  }
</script>




<h1>Hello</h1>

<form class="form" on:submit|preventDefault={handleSubmit}>
	<span class="span-main">For business enquiries please use the form below</span>
	<h4>*Required</h4>
  <InputField type="text" placeholder="Name*" value={name} onInput={e => name = e.target.value} error={errors.name} />
  <InputField type="text" placeholder="Company*" value={company} onInput={e => company = e.target.value} error={errors.company} />
  <InputField type="email" placeholder="E-mail*" value={email} onInput={e => email = e.target.value} error={errors.email} />
  <InputField type="tel" placeholder="Phone*" value={phone} onInput={e => phone = e.target.value} />
  <InputField type="text" placeholder="Subject*" value={subject} onInput={e => subject = e.target.value} />
  <InputField type="text" placeholder="Message*" value={message} onInput={e => message = e.target.value} error={errors.message} />
  
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
