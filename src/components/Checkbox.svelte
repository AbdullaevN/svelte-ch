<script>
  export let checked = false;
  export let onChange = () => {};
</script>

<div class="checkbox">
  <input type="checkbox" bind:checked on:change={onChange} />
</div>

<style>
  .checkbox {
    display: flex;
    align-items: center;
  }

  input[type="checkbox"] {
    margin-right: 10px;
  }
</style>
