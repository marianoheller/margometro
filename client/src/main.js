import Vue from "vue";
import io from "socket.io-client";
import VueSocketIO from "vue-socket.io";
import store from "./store";
import App from "./App.vue";
import "./registerServiceWorker";

Vue.use(
  new VueSocketIO({
    debug: false,
    connection: io()
  })
);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
