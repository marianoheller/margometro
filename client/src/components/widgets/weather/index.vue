<template>
  <div>
    <div class="temp-container">
      13 °C
    </div>
    <div class="humidity-container">
      75 %
    </div>
  </div>
</template>

<script>
export default {
  name: "weather-widget"
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
