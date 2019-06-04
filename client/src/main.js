import Vue from 'vue';
import io from 'socket.io-client';
import VueSocketIO from 'vue-socket.io'
import App from './App.vue'

// TODO: implementar el port con env vars
export const socketInstance = io(`http://localhost:${4113}`);

Vue.use(new VueSocketIO({
  debug: true,
  connection: socketInstance,
}));
Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
}).$mount('#app')
