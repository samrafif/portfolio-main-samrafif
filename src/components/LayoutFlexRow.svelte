<script>
  export let gap = "8px";
  export let wrap = "nowrap";
</script>

<div
  class="layout-flexrow"
  style="display: flex; gap: {gap}; flex-wrap: {wrap};"
>
  <slot></slot>
</div>

<!-- <style>
  .layout-flexrow {
    
  }
</style> -->
