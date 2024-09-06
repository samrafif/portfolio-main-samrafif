<script>
  // Import markdown conversion library
  import { OnMount } from "fractils";
  import { fly } from "svelte/transition";
  import { marked } from "marked";
  import { createArticle, editArticle, getArticle } from "../db";
  import { pop } from "svelte-spa-router";

  import LayoutFlexRow from "../components/LayoutFlexRow.svelte";
  import { onDestroy, onMount } from "svelte";
  import { writable } from "svelte/store";
  import LayoutFlexColumn from "../components/LayoutFlexColumn.svelte";

  export let params = {};
  // TODO: I am doing this too much, make the get_ funcs return a store.
  let article = writable(null);

  onMount(() => {
    if (!params.blog_id) return;
    getArticle(params.blog_id).then((article_data) => {
      if (!article_data) return;
      article.set(article_data.data);
    });
  });

  let article_writer_data = {
    markdown_body: "",
    type: "",
    short_desc: "",
    tags: "",
    title: "",
  };

  // TODO: !important: Please standardize the article data structure so ya don't have to do this data hot potato ritual
  let unsub = article.subscribe((value) => {
    if (!value) return;
    article_writer_data = value;
  });
  onDestroy(unsub);

  function createOrEditArticle() {
    let article_params = [
      article_writer_data.title,
      article_writer_data.short_desc,
      marked(article_writer_data.markdown_body),
      article_writer_data.type,
      article_writer_data.markdown_body,
      // HACK: Hacky wacky wawning OwO
      article_writer_data.tags.toString().split(","),
    ];
    if (!params.blog_id) {
      createArticle(...article_params);
      alert("SUCCESS CREATE");
      pop();
      return;
    }
    editArticle(params.blog_id, ...article_params);
    alert("SUCCESS EDIT");
    pop();
  }
</script>

<OnMount>
  <main in:fly={{ y: -50, duration: 1000 }}>
    <div class="toolbar">
      <LayoutFlexRow wrap="wrap" gap="8px">
        <input
          bind:value={article_writer_data.title}
          placeholder="Article title"
          type="text"
          name="article-title"
          id=""
        />
        <input
          bind:value={article_writer_data.tags}
          placeholder="Article tags (split with commas)"
          type="text"
          name="article-title"
          id=""
        />
        <select
          bind:value={article_writer_data.type}
          placeholder="Article Type"
        >
          <option value="project"> Project </option>
          <option value="blog"> Blog </option>
        </select>
        <button on:click={createOrEditArticle}>Publish</button>
      </LayoutFlexRow>
    </div>
    <!-- NOTE: Autistic UI sorry future me -->
    <br />
    <textarea
      bind:value={article_writer_data.short_desc}
      placeholder="Short description"
    />
    <br />
    <LayoutFlexColumn>
      <h1>Markdown Editor</h1>
      <span
        >*for now, host images with <a
          style="text-decoration: underline;"
          href="https://imgur.com/upload">imgur</a
        ></span
      >
      <!-- Declare a textarea where the user can enter markdown, and bind it to the variable `markdown` -->
      <textarea
        bind:value={article_writer_data.markdown_body}
        placeholder="Enter markdown here"
      />

      <!-- Convert the markdown to HTML and display it -->
      <div class="preview">
        {@html marked(article_writer_data.markdown_body)}
      </div>
    </LayoutFlexColumn>
  </main>
</OnMount>

<style>
  button,
  select {
    background-color: var(--text-color);
    color: var(--bg-color);
    padding: 0.5rem 2rem 0.5rem 2rem;
    font-weight: 500;
    border-radius: 5px;
  }
  input,
  textarea,
  .preview {
    padding: 1rem;
    box-sizing: border-box;
    display: block;
    width: 100%;
    border: 1px solid white;
  }

  textarea {
    font-family: monospace, Roboto;
    /* height: 80vh; */
    border: none;
    margin: 0;
    padding: 1rem;
  }

  .preview {
    height: 75%;
    padding: 2rem;
    border-top: solid 2px #888;
  }

  h1 {
    background: var(--bg-color);
    border: 1px solid white;
    margin: 0px;
    padding: 0.8rem;
    font-size: 1.2rem;
  }

  :global(body) {
    padding: 0;
  }
</style>
