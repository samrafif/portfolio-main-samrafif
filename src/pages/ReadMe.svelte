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
    Software Development: <strong><a href="https://github.com/samrafif">GitHub</a></strong>
  </h2>
  <p>
    I’m a self-taught fullstack and embedded developer. I’ve spent the last 6 years breaking (and fixing) things in Python, JS/TS, C, and C++. I’m "okayly" experienced across the stack, but I’ve got a permanent hunger for better tooling and cleaner logic.
  </p>
</div>

<div class="readme-item">
  <h2 class="readme-header-title">
    Design: <strong><a href="https://dribbble.com/abrisamss_rafif">Dribbble</a></strong>
  </h2>
  <p>
    Exploring the world of visual and product design. Currently, my workflow is "mostly Figma really"—from wireframes to prototyping. I’m still sharpening my eye.
  </p>
</div>

<div class="readme-item">
  <h2 class="readme-header-title">
    Natural Language Processing: <strong><a href="https://huggingface.co/samwoof">Hugging Face</a></strong>
  </h2>
  <p>
    Diving deep into Machine Learning, specifically NLP—because let’s be honest, LLMs go brrrrr. I’ve been experimenting with Deep Learning for about a year now, trying to figure out what’s actually happening under the hood of them.
  </p>
</div>
<div class="readme-item">
  <h2 class="readme-header-title">
    Hardware & Labs: <strong>Systems & Silicon</strong>
  </h2>
  <p>
    I enjoy making code manifest in the physical world. From building <strong>ESP32-powered flood alarms</strong> and smart clocks to managing a <strong>Raspberry Pi homelab</strong>. I’m comfortable with basic sysadmin tasks, Docker orchestration via Discord bots, and monitoring it all with Grafana. 
  </p>
  <p>
    <i>Current obsession:</i> Retro-computing. I’ve built a 4-bit relay adder and once attempted a full relay computer (the PCB traces won that round, but I'll be back for a rematch).
  </p>
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
