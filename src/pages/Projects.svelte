<script>
  import { OnMount } from "fractils";
  import { fly } from "svelte/transition";

  let projects_list = [
    {
      type: "project",
      tags: ["project"],
      title: "CRAZYLARM WEIRDASS ALARM PROJECT",
      short_desc: "I made a <b>really</b> loud alarm clock... and I HATE it",
      date: "19/12/2023",
    },
  ];
</script>

<main>
  <OnMount>
    <div in:fly={{ y: -50, duration: 1000 }}>
      <div class="layout-flex-column">
        {#each projects_list as project, i}
          <div class="project-item">
            <h1 class="project-title">{project.title}</h1>
            <p>{@html project.short_desc}</p>
            <b>/{project.date.split("/")[2]}</b>
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
