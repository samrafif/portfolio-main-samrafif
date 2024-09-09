<script>
  import LayoutFlexColumn from "./LayoutFlexColumn.svelte";
</script>

<main>
  <LayoutFlexColumn gap="10px">
    <input placeholder="Your name" type="text" />
    <input placeholder="Your email" type="email" />
    <input placeholder="Your website" type="text" />
    <textarea placeholder="What do you wanna talk about" name="message" id=""
    ></textarea>
    <br />
    <button>Get In Touch</button>
  </LayoutFlexColumn>
</main>

<style>
  main {
    width: 40%;
  }
  button {
    background-color: var(--text-color);
    color: var(--bg-color);
    padding: 1rem;
  }
  input {
    padding: 1rem;
    transition: all 1s;
  }
  textarea {
    padding: 1rem 1rem 2rem;
  }

  @media screen and (max-width: 850px) {
    main {
      width: 85%;
    }
  }
</style>
