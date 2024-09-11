<script>
  import LayoutFlexColumn from "./LayoutFlexColumn.svelte";

  let displayErr = "none";

  function onClickPsudo() {
    // TODO: Make a better form validation system but this'll work for now
    // TODO: Make an abstract Form component, use an array
    if (
      $contactMessageState.name == "" ||
      $contactMessageState.email == "" ||
      $contactMessageState.message == ""
    )
      displayErr = "block";
    displayErr = "none";

    onClick();
  }

  export let onClick;
  export let contactMessageState;
</script>

<main>
  <LayoutFlexColumn gap="10px">
    <input
      bind:value={$contactMessageState.name}
      placeholder="Your name"
      type="text"
    />
    <input
      bind:value={$contactMessageState.email}
      placeholder="Your email"
      type="email"
    />
    <input
      bind:value={$contactMessageState.website}
      placeholder="Your website (if you have)"
      type="text"
    />
    <textarea
      bind:value={$contactMessageState.message}
      placeholder="What do you wanna talk about"
      name="message"
      id=""
    ></textarea>
    <br />
    <span style="color: red; display: {displayErr}">Something's missing</span>
    <button on:click={onClickPsudo}>Get In Touch</button>
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
