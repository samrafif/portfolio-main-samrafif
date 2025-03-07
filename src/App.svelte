<script>
  import Router from "svelte-spa-router";
  import Home from "./pages/Main.svelte";
  import Blogs from "./pages/Blogs.svelte";
  import ReadMe from "./pages/ReadMe.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Page404 from "./pages/Page404.svelte";
  import LayoutFlexRow from "./components/LayoutFlexRow.svelte";
  import Contact from "./pages/Contact.svelte";
  import { Canvas } from "@threlte/core";
  import ThrelteDynamicBackground from "./components/ThrelteDynamicBackground.svelte";
  import Icon from "@iconify/svelte";
  import AdminPortal from "./pages/AdminPortal.svelte";
  import BlogWriter from "./pages/BlogWriter.svelte";
  import BlogViewer from "./pages/BlogViewer.svelte";
  import MediaQuery from "./components/MediaQuery.svelte";

  const navbar_paths = [
    { path: "/", text: "Main" },
    { path: "/readme", text: "ReadMe" },
    { path: "/blog", text: "Blog" },
    { path: "/contact", text: "Contact" },
  ];

  const routes = {
    "/": Home,
    "/blog": Blogs,
    "/blog/:blog_id": BlogViewer,
    "/blog/tag/:tag": Blogs,
    "/readme": ReadMe,
    "/contact": Contact,
    "/admin": AdminPortal,
    "/admin/blog-writer/:blog_id?": BlogWriter,
    "/*": Page404,
  };

  const social_urls = {
    gh: "https://github.com/samrafif",
    ig: "https://www.instagram.com/briss.sams",
    rd: "https://www.reddit.com/user/Mallow_Malo/",
    ln: "https://www.linkedin.com/in/abrisam-rafif-maulana-32a987236/",
  };
</script>

<main>
  <div class="canvas-container">
    <!-- <Canvas>
      <ThrelteDynamicBackground />
    </Canvas> -->
  </div>
  <div class="navigation">
    <Navbar paths={navbar_paths} />
    <LayoutFlexRow gap="18px">
      <MediaQuery query="screen and (max-width: 850px)" let:matches>
        {#if matches}
          <a class="social-link" href={social_urls.gh}
            ><Icon class="social-icon" height="30px" icon="mdi:github" /></a
          >
          <a class="social-link" href={social_urls.ig}
            ><Icon class="social-icon" height="30px" icon="mdi:instagram" /></a
          >
          <a class="social-link" href={social_urls.rd}
            ><Icon class="social-icon" height="30px" icon="mdi:reddit" /></a
          >
          <a class="social-link" href={social_urls.ln}
            ><Icon class="social-icon" height="30px" icon="mdi:linkedin" /></a
          >
        {/if}
      </MediaQuery>
      <MediaQuery query="screen and not (max-width: 850px)" let:matches>
        {#if matches}
          <a class="social-link" href={social_urls.gh}>GTHB</a>
          <a class="social-link" href={social_urls.ig}>INST</a>
          <a class="social-link" href={social_urls.rd}>RDDT</a>
          <a class="social-link" href={social_urls.ln}>LKDN</a>
        {/if}
      </MediaQuery>
    </LayoutFlexRow>
    <a class="social-link" href="#/admin">ADMN</a>
  </div>
  <div class="main-content">
    <Router {routes} />
  </div>
</main>

<style>
  .social-icon {
    color: var(--text-color);
  }

  .canvas-container {
    /* visibility: hidden; */
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

  .main-content {
    margin-left: 7%; /* TODO: Questionable */
    margin-top: 4rem;
    color: var(--text-color);
  }

  .navigation {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  @media screen and (max-width: 850px) {
    .main-content {
      margin-left: 0;
      color: var(--text-color);
    }
  }
</style>
