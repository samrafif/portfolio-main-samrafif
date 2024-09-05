<script>
  export let gap;
</script>

<div class="layout-flexrow" style="display: flex; gap: {gap};">
  <slot></slot>
</div>

<!-- <style lang="scss">
  .layout-flexrow {
    display: flex;
    gap: {gap};
  }
</style> -->
