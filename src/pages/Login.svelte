<script>
  import { OnMount } from "fractils";
  import LoginModal from "../components/LoginModal.svelte";
  import { fly } from "svelte/transition";
  import { writable } from "svelte/store";

  import { login } from "../auth";

  let email = writable("aaa");
  let password = writable("aaa");

  function onClick() {
    login($email, $password);
  }
</script>

<main class="main-login-container">
  <OnMount>
    <!-- TODO: Extract this fly and OnMount into it's own component -->
    <div class="login-modal" in:fly={{ y: -50, duration: 1000 }}>
      <LoginModal {onClick} loginState={{ email, password }} />
    </div>
  </OnMount>
</main>

<style>
  .main-login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .login-modal {
    margin-top: 10rem;
  }
</style>
