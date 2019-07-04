import reduce from "lodash/reduce";
import { invertColor } from "./../../helpers";

const INITIAL_COLOR = "#201F1E";

const ALPHA_HEX = {
  100: "FF",
  95: "F2",
  90: "E6",
  85: "D9",
  80: "CC",
  75: "BF",
  70: "B3",
  65: "A6",
  60: "99",
  55: "8C",
  50: "80",
  45: "73",
  40: "66",
  35: "59",
  30: "4D",
  25: "40",
  20: "33",
  15: "26",
  10: "1A",
  5: "0D",
  0: "00"
};

const alphaFolder = c => (acc, suffix, k) => ({ ...acc, [k]: `${c}${suffix}` });

const state = {
  primary: reduce(ALPHA_HEX, alphaFolder(INITIAL_COLOR), {}),
  secondary: reduce(ALPHA_HEX, alphaFolder(invertColor(INITIAL_COLOR)), {})
};

const mutations = {
  setThemeColor(state, color) {
    state.primary = reduce(ALPHA_HEX, alphaFolder(color), {});
    state.secondary = reduce(ALPHA_HEX, alphaFolder(invertColor(color)), {});
  }
};

const getters = {
  primary: state => state.primary[100],
  secondary: state => state.secondary[100],
  fontPrimary: state => state.secondary[90],
  fontSecondary: state => state.secondary[90],
  shadow: state => state.secondary[10]
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
};
