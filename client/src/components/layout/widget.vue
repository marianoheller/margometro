<template>
  <div class="widget-layout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "widget-layout"
};
</script>

<style>
.widget-layout {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border: 1px solid black;
  background-color: rgba(1, 1, 1, 0.1);
  color: black;
  /* grid-column-start
  grid-column-end
  grid-row-start
  grid-row-end */
}

.widget-layout:hover {
  filter: grayscale(0.5) drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5));
  cursor: pointer;
}
</style>
