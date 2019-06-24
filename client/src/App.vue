<template>
  <div id="app">
    <dashboard-view />
  </div>
</template>

<script>
import dashboard from "./views/dashboard.vue";

export default {
  name: "app",
  components: {
    "dashboard-view": dashboard
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
