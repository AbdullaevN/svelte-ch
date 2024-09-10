<script>
  export let checked = false;
  export let onChange;
</script>

<div class="checkbox-container">
  <input
    type="checkbox"
    checked={checked}
    on:change={onChange}
    class="checkbox-input"
  />
  <label class="checkbox-label">Согласен с условиями</label>
</div>

<style>
  .checkbox-container {
    display: flex;
    align-items: center;
  }
  .checkbox-input {
    margin-right: 8px;
  }
  .checkbox-label {
    font-size: 14px;
  }
</style>
