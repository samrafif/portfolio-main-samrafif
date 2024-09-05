<script>
  import { OnMount } from "fractils";
  import LoginModal from "../components/LoginModal.svelte";
  import { fly } from "svelte/transition";
  import { writable } from "svelte/store";

  import { login, checkLoggedIn, getCurrentUser } from "../auth";
  import { onMount } from "svelte";
  import LayoutFlexColumn from "../components/LayoutFlexColumn.svelte";
  import BlogList from "../components/BlogList.svelte";

  onMount(() => {});

  let email = writable("aaa");
  let password = writable("aaa");

  function onClick() {
    login($email, $password);
    loggedIn = true;
  }

  let loggedIn = checkLoggedIn();
</script>

<main class="main-admin-container">
  <OnMount>
    <div in:fly={{ y: -50, duration: 1000 }}>
      <!-- TODO: Extract this fly and OnMount into it's own component -->
      {#if loggedIn}
        <LayoutFlexColumn gap="14px">
          <h1>
            Welcome Back Bang Admin {getCurrentUser().email.split("@")[0]}!!!
          </h1>
          <p>I missed you, ya know?</p>
          <a href="#/blog-writer"
            ><button><p>Write a blog article</p></button></a
          >
          <BlogList />
        </LayoutFlexColumn>
      {:else}
        <div class="login-modal">
          <LoginModal {onClick} loginState={{ email, password }} />
        </div>
      {/if}
    </div>
  </OnMount>
</main>

<style>
  button {
    background-color: var(--text-color);
    color: var(--bg-color);
    padding: 0.5rem 2rem 0.5rem 2rem;
  }

  .main-admin-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .login-modal {
    margin-top: 10rem;
  }

  p {
    margin: 0;
  }
</style>
