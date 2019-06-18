<template>
  <div id="container" v-bind:title="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "widget-layout",
  props: {
    isConnected: { type: Boolean, default: false }
  },
  computed: {
    style() {
      return `background-color: ${this.isConnected ? "#25ff8b" : "#ff3e25"}`;
    }
  }
};
</script>

<style>
#container {
  border: 1rem solid black;
  background-color: yellow;
  color: black;
  /* grid-column-start
  grid-column-end
  grid-row-start
  grid-row-end */
}
</style>
