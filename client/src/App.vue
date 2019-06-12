<template>
  <div id="app">
    <ConnectionIndicator v-bind:isConnected="isConnected" />
    <Gauge v-bind:value="socketMessage" />
  </div>
</template>

<script>
import Gauge from "./components/Gauge";
import ConnectionIndicator from "./components/ConnectionIndicator.vue";

export default {
  name: "app",
  components: {
    Gauge,
    ConnectionIndicator
  },
  data() {
    return {
      isConnected: false,
      socketMessage: 0
    };
  },
  sockets: {
    connect() {
      this.isConnected = true;
    },
    disconnect() {
      this.isConnected = false;
    },
    measure(data) {
      this.socketMessage = data;
    }
  }
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
  background-color: #f2fff7;
}
</style>
