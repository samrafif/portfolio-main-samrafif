<script>
  import Router from "svelte-spa-router";
  import Home from "./pages/Main.svelte";
  import Projects from "./pages/Projects.svelte";
  import ReadMe from "./pages/ReadMe.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Page404 from "./pages/Page404.svelte";
  import LayoutFlexRow from "./components/LayoutFlexRow.svelte";
  import Contact from "./pages/Contact.svelte";
  import { Canvas } from "@threlte/core";
  import ThrelteDynamicBackground from "./components/ThrelteDynamicBackground.svelte";

  let navbar_paths = [
    { path: "/", text: "Main" },
    { path: "/projects", text: "Projects" },
    { path: "/readme", text: "ReadMe" },
    { path: "/contact", text: "Contact" },
  ];

  const routes = {
    "/": Home,
    "/projects": Projects,
    "/readme": ReadMe,
    "/contact": Contact,
    "/*": Page404,
  };
</script>

<main>
  <div class="canvas-container">
    <Canvas>
      <ThrelteDynamicBackground />
    </Canvas>
  </div>
  <div class="bbb">
    <Navbar paths={navbar_paths} />
    <LayoutFlexRow gap="18px">
      <a class="social-link" href="#/">GTHB</a>
      <a class="social-link" href="#/">INST</a>
      <a class="social-link" href="#/">RDDT</a>
      <a class="social-link" href="#/">LKDN</a>
    </LayoutFlexRow>
  </div>
  <div class="aaa">
    <Router {routes} />
  </div>
</main>

<style>
  .canvas-container {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 94%;
    width: 90%;
    z-index: -1;
  }

  .social-link {
    color: var(--text-color);
    font-size: 1.2rem;
    transition: font-weight 1s;
  }

  .social-link:hover {
    font-weight: 900;
  }

  .aaa {
    margin-top: 4rem;
    color: var(--text-color);
  }
  .bbb {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
</style>
