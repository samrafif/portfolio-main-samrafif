<script>
  import { OnMount } from "fractils";
  import { fly } from "svelte/transition";

  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  import { listPublishedBlogs } from "../db";

  // NOTE: THIS FEELS ILLEGAL
  let projects = writable([]);

  onMount(() => {
    listPublishedBlogs().then((blogList) => {
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
            <a href="#/blog/{project.id}"
              ><h1 class="project-title">{project.data.title}</h1></a
            >
            <p>{@html project.data.short_desc}</p>
            <b>/{project.data.write_date.split("/")[2]}</b>
          </div>
          <br />
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

  @media screen and (max-width: 850px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
</style>
