<template>
  <div id="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "dashboard-layout"
};
</script>

<style>
#container {
  display: grid;
  grid-template-columns: 33.33% auto 33.33%;
  grid-template-rows: 50% auto;
}
</style>
