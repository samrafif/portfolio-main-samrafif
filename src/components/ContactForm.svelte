<script>
  import LayoutFlexColumn from "./LayoutFlexColumn.svelte";
</script>

<main>
  <LayoutFlexColumn gap="10px">
    <input placeholder="Ya name" type="text" />
    <input
      placeholder="Ya email (so like I can slide in ur inbox)"
      type="email"
    />
    <input placeholder="Ya website" type="text" />
    <textarea placeholder="Whaddya wanna talk bout :3" name="message" id=""
    ></textarea>
    <br />
    <button>Touch me.</button>
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
