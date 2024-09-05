<script>
  import { OnMount } from "fractils";
  import { fly } from "svelte/transition";

  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  import { listProjects } from "../db";

  // NOTE: THIS FEELS ILLEGAL
  let projects = writable([]);

  onMount(() => {
    listProjects().then((blogList) => {
      projects.set(blogList);
    });
  });
</script>

<main>
  <OnMount>
    <div in:fly={{ y: -50, duration: 1000 }}>
      <div class="layout-flex-column">
        {#each $projects as project, i}
          <div class="project-item">
            <h1 class="project-title">{project.title}</h1>
            <p>{@html project.short_desc}</p>
            <b>/{project.write_date.split("/")[2]}</b>
          </div>
        {/each}
      </div>
    </div>
  </OnMount>
</main>

<style>
  /* i {
    font-style: italic;
  } */

  .layout-flex-column {
    margin-left: 7%;
    display: flex;
    flex-direction: column;
  }

  .project-title {
    font-weight: 400;
    transition: all 1s;
  }

  .project-title:hover {
    cursor: pointer;
    font-weight: 900;
  }
</style>
