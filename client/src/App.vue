<template>
  <div id="app">
    <ConnectionIndicator v-bind:isConnected="isConnected" />
    <Gauge v-bind:value="socketMessage" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import Gauge from "./components/Gauge";
import ConnectionIndicator from "./components/ConnectionIndicator.vue";
import { MUTATIONS_TYPES as WEATHER_MUTATIONS_TYPES } from './store/modules/weather'

export default {
  name: "app",
  components: {
    'dashboard-layout',
    ConnectionIndicator
  },
  data() {
    return {
      isConnected: false,
      socketMessage: 0
    };
  },
  methods: {
    ...mapMutations([
      WEATHER_MUTATIONS_TYPES.SET_TEMPERATURE
    ]),
  },
  sockets: {
    connect() {
      this.isConnected = true;
    },
    disconnect() {
      this.isConnected = false;
    },
    weather(data) {
      return data;
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
