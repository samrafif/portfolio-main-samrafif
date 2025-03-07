<script>
  import { OnMount } from "fractils";
  import { onMount } from "svelte";
  import { getArticle } from "../db";
  import { writable } from "svelte/store";
  import { fly } from "svelte/transition";
  import LayoutFlexRow from "../components/LayoutFlexRow.svelte";
  import { checkLoggedIn } from "../auth";

  export let params = {};
  // TODO: I am doing this too much, make the func return a store.
  let article = writable(null);

  onMount(() => {
    getArticle(params.blog_id).then((article_data) => {
      if (!article_data) return;
      if (!article_data.data.published && !checkLoggedIn()) return;
      article.set(article_data);
    });
  });
</script>

<main>
  <OnMount>
    <div class="article-container" in:fly={{ y: -50, duration: 1000 }}>
      {#if $article}
        <div class="article-content">
          <h1>{$article.data.title}</h1>
          <div class="tag-list-container">
            <LayoutFlexRow gap="8px">
              {#each $article.data.tags as tag, i}
                <span>{"#"}{tag}</span>
              {/each}
            </LayoutFlexRow>
          </div>
          {@html $article.data.html_body}
        </div>
      {/if}
    </div>
  </OnMount>
</main>

<style>
  .article-container {
    margin-left: -7%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .article-content {
    background-color: rgb(32, 32, 32);
    margin-top: 2%;
    border-radius: 12px;
    padding: 4rem;
    width: 50%;
  }

  :global(code) {
    text-wrap: wrap;
  }

  .tag-list-container {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 850px) {
    h1 {
      font-size: 2.5rem;
    }

    .article-content {
      width: 100%;
    }

    .article-container {
      margin-left: 0;
    }
  }
</style>
