<template>
  <div id="dashboard-view">
    <ConnectionIndicator v-bind:isConnected="isConnected" />
    <dashboard-layout>
      <WeatherWidget v-bind:value="socketMessage" />
      <WeatherWidget v-bind:value="socketMessage" />
      <MargometroWidget v-bind:value="socketMessage" />
    </dashboard-layout>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import DashboardLayout from "../components/layout/dashboard.vue";
import WeatherWidget from "../components/widgets/weather";
import MargometroWidget from "../components/widgets/margometro";
import ConnectionIndicator from "../components/ConnectionIndicator.vue";
import { MUTATIONS_TYPES as WEATHER_MUTATIONS_TYPES } from "../store/modules/weather";

export default {
  name: "dashboard-view",
  components: {
    "dashboard-layout": DashboardLayout,
    ConnectionIndicator,
    WeatherWidget,
    MargometroWidget
  },
  data() {
    return {
      isConnected: false,
      socketMessage: 0
    };
  },
  methods: {
    ...mapMutations([WEATHER_MUTATIONS_TYPES.SET_TEMPERATURE])
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
#dashboard-view {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  background-color: #f2fff7;
}
</style>
