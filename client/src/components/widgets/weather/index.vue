<template>
  <widget-layout>
    <div class="temp-container">
      13 °C
    </div>
    <div class="humidity-container">
      75 %
    </div>
  </widget-layout>
</template>

<script>
import WidgetLayout from "../../layout/widget.vue";
export default {
  name: "weather-widget",
  components: {
    "widget-layout": WidgetLayout
  }
};
</script>

<style>
.temp-container {
  font-size: 2rem;
}
.humidity-container {
  font-size: 1.25rem;
}
</style>
