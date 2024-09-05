<script>
  export let gap;
</script>

<div
  class="layout-flexrow"
  style="display: flex; flex-direction: column; gap: {gap};"
>
  <slot></slot>
</div>
