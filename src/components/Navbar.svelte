<script>
  import LayoutFlexRow from "./LayoutFlexRow.svelte";
  import { location } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import { writable } from "svelte/store";
  import { Motion } from "svelte-motion";
  import { onMount } from "svelte";

  export let paths;
  let paths_filtered = [];
  let open = "";
  let i = 0;

  /** Dispatch event on click outside of node */
  export function clickOutside(node) {
    const handleClick = (event) => {
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
        node.dispatchEvent(new CustomEvent("click_outside", node));
      }
    };

    document.addEventListener("click", handleClick, true);

    return {
      destroy() {
        document.removeEventListener("click", handleClick, true);
      },
    };
  }

  onMount(() => {
    let mql = window.matchMedia("screen and (max-width: 850px)");
    let mqlListener = (v) => {
      if (v.matches) {
        i = -10;
      }
    };
    mql.addListener(mqlListener);
  });

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
    if (open == "") {
      i = 0;
      open = "open";
    } else {
      i = -10;
      setTimeout(() => {
        open = "";
      }, 1000);
    }
    console.log(open);
  }
</script>

<div class="navbar-container">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    use:clickOutside
    on:click_outside={() => {
      if (open) toggleNav();
    }}
    on:click={toggleNav}
    class="burger"
  >
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
  <Motion
    animate={{ y: i, opacity: i + 10 }}
    transition={{ duration: 0.5 }}
    let:motion
  >
    <div class="component-navbar {open}" use:motion>
      {#each paths_filtered as path, i}
        <!-- TODO: Use svelte-spa-router's provided active method, rather than this crap -->
        <a href="#{path.path}">
          <div class="navbar-nav-item {path.active}">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a>{path.text}</a>
          </div></a
        >
      {/each}
    </div>
  </Motion>
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
