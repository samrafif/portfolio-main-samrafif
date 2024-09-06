<script>
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  import { listAllBlogs } from "../db";

  // NOTE: THIS FEELS ILLEGAL
  let blogs = writable([]);

  onMount(() => {
    listAllBlogs().then((blogList) => {
      blogs.set(blogList);
    });
  });
</script>

<main>
  {#each $blogs as blog, i}
    <a href="#/admin/blog-writer/{blog.id}"><h2>{blog.data.title}</h2></a>
    <p>{blog.data.short_desc}</p>
    <p class="blog-date">{blog.data.write_date}</p>
  {/each}
</main>

<style>
  p {
    margin: 0;
  }

  .blog-date {
    font-size: 16px;
    font-weight: 300;
  }
</style>
