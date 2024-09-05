<script>
  import { OnMount } from "fractils";
  import { fly } from "svelte/transition";
</script>

<main>
  <OnMount>
    <div in:fly={{ y: -50, duration: 1000 }}>
      <h1>Nyasar Bang?</h1>
      <br />
      <a style="color: white; text-decoration: underline;" href="#/">Go Home</a>
    </div>
  </OnMount>
</main>
