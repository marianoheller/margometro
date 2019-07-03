<template>
  <main-layout>
    <dashboard-view />
  </main-layout>
</template>

<script>
import main from "./components/layout/main";
import dashboard from "./views/dashboard";

export default {
  name: "app",
  components: {
    "main-layout": main,
    "dashboard-view": dashboard
  }
};
</script>
