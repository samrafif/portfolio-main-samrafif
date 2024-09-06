<script>
  export let gap = "8px";
</script>

<div
  class="layout-flexrow"
  style="display: flex; flex-direction: column; gap: {gap};"
>
  <slot></slot>
</div>
