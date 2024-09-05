<script>
  // Import markdown conversion library
  import { marked } from "marked";

  // Declare a variable to store the markdown data
  let markdown = "";
</script>

<main>
  <h1>Markdown Editor</h1>

  <!-- Declare a textarea where the user can enter markdown, and bind it to the variable `markdown` -->
  <textarea bind:value={markdown} placeholder="Enter markdown here" />

  <!-- Convert the markdown to HTML and display it -->
  <div class="preview">{@html marked(markdown)}</div>

  <!-- Make it look (slightly) nicer ;) -->
  <style>
    textarea,
    .preview {
      box-sizing: border-box;
      display: block;
      width: 100%;
    }

    textarea {
      font-family: monospace, Roboto;
      height: 25%;
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
      background: #e1e1e1;
      margin: 0px;
      padding: 0.8rem;
      font-size: 1.2rem;
    }

    :global(body) {
      padding: 0;
    }
  </style>
</main>
