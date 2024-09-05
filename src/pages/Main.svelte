<script>
  import { OnMount } from "fractils";
  import Typewriter from "svelte-typewriter";
  import { fly } from "svelte/transition";
  import MainImg from "../assets/Frame 1.png";
</script>

<main class="main-header-container">
  <OnMount>
    <div in:fly={{ y: -50, duration: 1000 }}>
      <div class="main-header">
        <div class="header-text">
          <Typewriter interval={50} mode="cascade" delay={300}>
            <div class="lol">
              <h1>Hello.</h1>
              <h1>I am</h1>
              <h1>Abrisam</h1>
            </div>
          </Typewriter>
          <div
            style="margin-top: 0.5rem;"
            in:fly={{ y: -50, duration: 1000, delay: 1500 }}
          >
            <Typewriter mode="loop">
              <p class="skill-text">Web Developer</p>
              <p class="skill-text">Data Scientist</p>
              <p class="skill-text">Photographer</p>
              <p class="skill-text">Deep NLP Researcher</p>
              <p class="skill-text">Artist</p>
            </Typewriter>
            <p class="skill-text">Based in Indonesia.</p>
          </div>
        </div>
        <img
          class="main-header-img"
          in:fly={{ y: -50, duration: 1000, delay: 2000 }}
          src={MainImg}
          alt=""
        />
        <div
          class="detail-text"
          in:fly={{ y: -50, duration: 1000, delay: 2000 }}
        >
          <p>
            I have 3-4 years total of programming experience and 1+ years of
            experience with AI. <br /><br /> I understand the basic math behind Neural
            Networks; Calculus, Linear Algebra and the like. Potatoes are nice also.
            Oh yeah and photography.
          </p>
        </div>
      </div>
    </div>
  </OnMount>
</main>

<style>
  .main-header-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .main-header-img {
    width: 30%;
  }

  .lol {
    display: flex;
    flex-direction: column;
  }

  .lol h1 {
    line-height: 90%;
    font-size: 5rem;
  }

  .main-header {
    margin: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    margin: 0;
    font-size: 24px;
  }

  .detail-text {
    width: 30%;
  }

  .skill-text {
    font-weight: 400;
  }
</style>
