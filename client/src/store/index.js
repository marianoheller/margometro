import Vue from "vue";
import Vuex from "vuex";
import weather from "./modules/weather";
import createLogger from "../plugins/logger";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    weather
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
