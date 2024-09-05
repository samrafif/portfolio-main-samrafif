<script>
  import LayoutFlexRow from "./LayoutFlexRow.svelte";
  import { location } from "svelte-spa-router";
  export let paths;
  let paths_filtered = [];

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
</script>

<div class="component-navbar">
  <LayoutFlexRow gap="16px">
    {#each paths_filtered as path, i}
      <div class="navbar-nav-item {path.active}">
        <a href="#{path.path}">{path.text}</a>
      </div>
    {/each}
  </LayoutFlexRow>
</div>

<style>
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
</style>
