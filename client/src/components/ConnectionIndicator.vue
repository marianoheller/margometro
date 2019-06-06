<template>
  <div id="container">
    <div id="indicator" v-bind:style="style" />
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
      return `background-color: ${this.isConnected ? '#25ff8b': '#ff3e25'}`;
    },
  },
};
</script>

<style>
#container {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 10;
}

#indicator {
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.5);
}
</style>
