<script>
  import { OnMount } from "fractils";
  import { onMount } from "svelte";
  import { getArticle } from "../db";
  import { writable } from "svelte/store";
  import { fly } from "svelte/transition";
  import LayoutFlexRow from "../components/LayoutFlexRow.svelte";

  export let params = {};
  // TODO: I am doing this too much, make the func return a store.
  let article = writable(null);

  onMount(() => {
    getArticle(params.blog_id).then((article_data) => {
      if (!article_data) return;
      article.set(article_data);
    });
  });
</script>

<main>
  <OnMount>
    <div class="article-container" in:fly={{ y: -50, duration: 1000 }}>
      {#if $article}
        <h1>{$article.data.title}</h1>
        <div class="article-content">
          {@html $article.data.html_body}
          <LayoutFlexRow gap="8px">
            {#each $article.data.tags as tag, i}
              <span>{tag}</span>
            {/each}
          </LayoutFlexRow>
        </div>
      {/if}
    </div>
  </OnMount>
</main>

<style>
  .article-container {
    margin-left: 7%;
  }
  .article-content {
    margin-top: 2%;
  }
</style>
