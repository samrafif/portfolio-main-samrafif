<script>
  import { OnMount } from "fractils";
  import { fly } from "svelte/transition";
</script>

<main>
  <OnMount>
    <div in:fly={{ y: -50, duration: 1000 }}>
      <h1>Contact</h1>
    </div>
  </OnMount>
</main>
