<script>
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  import { listContactMessages } from "../db";

  // NOTE: THIS FEELS ILLEGAL
  let messages = writable([]);

  onMount(() => {
    listContactMessages().then((messagesList) => {
      messages.set(messagesList);
    });
  });
</script>

<main>
  {#each $messages as msg, i}
    <h2 style="margin-bottom: 0;">{msg.data.name}</h2>
    <span>{msg.data.email}</span> ||
    <span>{msg.data.website}</span>
    <br />
    <p style="margin-top: 1rem;">{msg.data.message}</p>
    <p class="blog-date">{msg.data.write_date}</p>
  {/each}
</main>

<style>
  p {
    margin: 0;
  }

  .blog-date {
    font-size: 16px;
    font-weight: 300;
  }
</style>
