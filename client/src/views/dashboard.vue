<template>
  <div id="dashboard-view">
    <dashboard-layout :widgets="widgets" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import DashboardLayout from "../components/layout/dashboard.vue";
import WeatherWidget from "../components/widgets/weather";
import MargometroWidget from "../components/widgets/margometro";
import ConnectionIndicator from "../components/connectionIndicator";
import { MUTATIONS_TYPES as WEATHER_MUTATIONS_TYPES } from "../store/modules/weather";

const widgets = [
  WeatherWidget,
  WeatherWidget,
  MargometroWidget,
  WeatherWidget,
  WeatherWidget
];

export default {
  name: "dashboard-view",
  components: {
    "dashboard-layout": DashboardLayout,
    ConnectionIndicator
  },
  data() {
    return {
      isConnected: false,
      socketMessage: 0,
      widgets
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
