<script>
  import LayoutFlexColumn from "./LayoutFlexColumn.svelte";

  let loginValues = { email: "", password: "" };

  function onClickPsudo() {
    loginState.email.set(loginValues.email);
    loginState.password.set(loginValues.password);

    onClick();
  }

  export let onClick;
  export let loginState;
</script>

<main>
  <form>
    <LayoutFlexColumn gap="16px">
      <input bind:value={loginValues.email} placeholder="Email" type="email" />
      <input
        bind:value={loginValues.password}
        placeholder="Password"
        type="password"
      />
      <button on:click={onClickPsudo}>Login</button>
    </LayoutFlexColumn>
  </form>
</main>

<style>
  form {
    width: 20rem;
  }
  input {
    padding: 1rem;
    transition: all 1s;
  }

  button {
    background-color: var(--text-color);
    color: var(--bg-color);
    padding: 1rem 0 1rem 0;
  }
</style>
