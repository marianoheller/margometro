import Vue from "vue";
import io from "socket.io-client";
import VueSocketIO from "vue-socket.io";
import App from "./App.vue";

Vue.use(
  new VueSocketIO({
    debug: false,
    connection: io()
  })
);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
