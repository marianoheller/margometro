<template>
  <div id="container">
    <div id="temp" v-bind:style="style" />
  </div>
</template>

<script>
export default {
  name: "ConnectionIndicator",
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
  display: flex;
  flex-direction: column;
}
</style>
