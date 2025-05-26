<script>
  import { OnMount } from "fractils";
  import { fly } from "svelte/transition";
</script>

<main>
  <OnMount>
    <div class="readme-container">
      <div in:fly={{ y: -50, duration: 500 }}>
        <h1>ReadMe</h1>
      </div>
      <div class="readme-list" in:fly={{ y: -50, duration: 500, delay: 200 }}>
        <div class="readme-item">
          <h2 class="readme-header-title">
            Development: <strong
              ><a href="https://github.com/samrafif">Github</a></strong
            >
          </h2>
          <p>
            I am a novice fullstack and embedded developer, okayly experienced
            in a few languages; Python, Javascript, Typescript, C, C++, and a
            bit of tooling but I am always hungry for knowledge. I have been
            coding for about 7 years.
          </p>
        </div>
        <div class="readme-item">
          <h2 class="readme-header-title">
            Design: <strong
              ><a href="https://dribbble.com/abrisamss_rafif">Dribble</a
              ></strong
            >
          </h2>
          <p>
            I am learning visual and product design, still working on it. but
            atleast i have basic experience with Figma and...figma prototyping
            stuff, mostly figma really
          </p>
        </div>
        <div class="readme-item">
          <h2 class="readme-header-title">
            Machine Learning: <strong
              ><a href="https://huggingface.co/samwoof">Huggingface</a></strong
            >
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
            Natural Language Processing: <strong
              ><a href="https://huggingface.co/samwoof">Huggingface</a></strong
            >
          </h2>
          <p>
            I am currently learning a bit on Machine Learning, more spesifically
            Deep Learning and even more spesifically NLP, cuz LLMs go brrrrrr.
            Abt 1 yr experience
          </p>
        </div>
      </div>
    </div>
  </OnMount>
</main>

<style>
  .readme-container {
    width: 90%;
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

  @media screen and (max-width: 850px) {
    .readme-list {
      width: 100%;
    }
  }
</style>
