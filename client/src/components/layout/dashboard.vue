<template>
  <div class="dashboard-layout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "dashboard-layout"
};
</script>

<style>
.dashboard-layout {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 33.33% auto 33.33%;
  grid-template-rows: 50% auto;
}
</style>
