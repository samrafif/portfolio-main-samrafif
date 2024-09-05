<script>
  // Import markdown conversion library
  import { OnMount } from "fractils";
  import { fly } from "svelte/transition";
  import { marked } from "marked";
  import { createArticle } from "../db";
  import LayoutFlexRow from "../components/LayoutFlexRow.svelte";

  // Declare a variable to store the markdown data
  let markdown_body = "";
  let type;
  let short_desc = "";
  let tags = "";
  let article_title = "";

  function createOrEditArticle() {
    createArticle(
      article_title,
      short_desc,
      marked(markdown_body),
      type,
      markdown_body,
      tags.split(",")
    );
    alert("SUCCESS");
  }
</script>

<OnMount>
  <main in:fly={{ y: -50, duration: 1000 }}>
    <div class="toolbar">
      <LayoutFlexRow gap="8px">
        <input
          bind:value={article_title}
          placeholder="Article title"
          type="text"
          name="article-title"
          id=""
        />
        <input
          bind:value={tags}
          placeholder="Article tags (split with commas)"
          type="text"
          name="article-title"
          id=""
        />
        <select bind:value={type} placeholder="Article Type">
          <option value="project"> Project </option>
          <option value="blog"> Blog </option>
        </select>
        <button on:click={createOrEditArticle}>Publish</button>
      </LayoutFlexRow>
    </div>
    <br />
    <textarea bind:value={short_desc} placeholder="Short description" />
    <br />
    <h1>Markdown Editor</h1>
    <span
      >*for now, host images with <a
        style="text-decoration: underline;"
        href="https://imgur.com/upload">imgur</a
      ></span
    >
    <!-- Declare a textarea where the user can enter markdown, and bind it to the variable `markdown` -->
    <textarea bind:value={markdown_body} placeholder="Enter markdown here" />

    <!-- Convert the markdown to HTML and display it -->
    <div class="preview">{@html marked(markdown_body)}</div>

    <!-- Make it look (slightly) nicer ;) -->
  </main>
</OnMount>

<style>
  button,
  select {
    background-color: var(--text-color);
    color: var(--bg-color);
    padding: 0.5rem 2rem 0.5rem 2rem;
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
