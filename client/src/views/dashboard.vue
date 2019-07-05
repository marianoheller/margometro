<template>
  <div id="dashboard-view">
    <dashboard-layout>
      <WeatherWidget v-bind:value="socketMessage" />
      <WeatherWidget v-bind:value="socketMessage" />
    </dashboard-layout>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import DashboardLayout from "../components/layout/dashboard.vue";
import WeatherWidget from "../components/widgets/weather";
import MargometroWidget from "../components/widgets/margometro";
import ConnectionIndicator from "../components/connectionIndicator";
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
  // TODO: esto quedó raro (no abria q hacerlo con mutations???)
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
}
</style>
