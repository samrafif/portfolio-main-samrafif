<script>
  import { OnMount } from "fractils";
  import { fly } from "svelte/transition";
</script>

<main>
  <OnMount>
    <div class="readme-container">
      <div in:fly={{ y: -50, duration: 1000 }}>
        <h1>ReadMe</h1>
      </div>
      <div class="readme-list" in:fly={{ y: -50, duration: 1000, delay: 500 }}>
        <div class="readme-item">
          <h2 class="readme-header-title">
            Development: <strong>Github</strong>
          </h2>
          <p>
            I am a novice fullstack and embedded developer, okayly experienced
            in a few languages; Python, Javascript, Typescript, C, C++, and a
            bit of tooling but I am always hungry for knowledge. I have been
            coding for about 3 years.
          </p>
        </div>
        <div class="readme-item">
          <h2 class="readme-header-title">
            Design: <strong>Dribble</strong>
          </h2>
          <p>
            I am a novice fullstack and embedded developer, okayly experienced
            in a few languages; Python, Javascript, Typescript, C, C++, and a
            bit of tooling but I am always hungry for knowledge. I have been
            coding for about 3 years.
          </p>
        </div>
        <div class="readme-item">
          <h2 class="readme-header-title">Machine Learning</h2>
          <p>
            I am a novice fullstack and embedded developer, okayly experienced
            in a few languages; Python, Javascript, Typescript, C, C++, and a
            bit of tooling but I am always hungry for knowledge. I have been
            coding for about 3 years.
          </p>
        </div>
        <div class="readme-item">
          <h2 class="readme-header-title">
            Natural Language Processing: <strong>Huggingface</strong>
          </h2>
          <p>
            I am a novice fullstack and embedded developer, okayly experienced
            in a few languages; Python, Javascript, Typescript, C, C++, and a
            bit of tooling but I am always hungry for knowledge. I have been
            coding for about 3 years.
          </p>
        </div>
      </div>
    </div>
  </OnMount>
</main>

<style>
  .readme-container {
    width: 90%;
    margin-left: 7%;
  }

  .readme-header-title {
    display: flex;
    justify-content: space-between;
  }

  .readme-list {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 70%;
  }

  h2 {
    font-size: 1.7rem;
    margin: 0;
  }

  .readme-header-title > strong {
    font-weight: 400;
    transition: all 1s;
    text-decoration: underline;
  }

  .readme-header-title > strong:hover {
    font-weight: 900;
    cursor: pointer;
  }
</style>
