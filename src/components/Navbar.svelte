<script>
  import LayoutFlexRow from "./LayoutFlexRow.svelte";
  import { location } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import { writable } from "svelte/store";
  import { fly } from "svelte/transition";
  export let paths;
  let paths_filtered = [];
  let open = writable("");

  $: {
    paths_filtered = [];
    for (let i = 0; i < paths.length; i++) {
      paths_filtered.push({
        path: paths[i].path,
        text: paths[i].text,
        active: paths[i].path == $location ? "active" : "",
      });
    }
    // console.log(paths_filtered);
    // console.log($location);
  }
  function toggleNav() {
    if ($open == "") {
      open.set("open");
    } else {
      open.set("");
    }
    console.log($open);
  }
</script>

<div class="navbar-container">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click={toggleNav} class="burger">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
  <div class="component-navbar {$open}">
    {#each paths_filtered as path, i}
      <!-- TODO: Use svelte-spa-router's provided active method, rather than this crap -->
      <div class="navbar-nav-item {path.active}">
        <a href="#{path.path}">{path.text}</a>
      </div>
    {/each}
  </div>
</div>

<style>
  .burger {
    display: none;
  }
  .bar {
    background-color: white;
    margin-bottom: 4px;
    margin-right: 12px;
    height: 5px;
    width: 26px;
  }

  .navbar-nav-item {
    padding: 4px 16px 4px 16px;
    transition: all 500ms;
  }

  .navbar-nav-item a {
    font-size: 24px;
    color: var(--text-color);
    transition: all 500ms;
  }

  .active {
    background-color: var(--text-color);
  }

  .active a {
    color: var(--bg-color) !important;
  }

  .component-navbar {
    z-index: 1;
    display: flex;
    gap: 16px;
    transition: width 1s;
    background-color: var(--bg-color);
  }

  @media screen and (max-width: 850px) {
    .component-navbar {
      left: 0;
      position: absolute;
      display: flex;
      flex-direction: column;
      display: none;
    }

    .burger {
      display: block;
    }
  }

  .open {
    top: 10%;
    width: 100%;
    display: block;
  }
</style>
