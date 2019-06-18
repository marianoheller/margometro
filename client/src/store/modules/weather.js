export const MUTATIONS_TYPES = {
  SET_TEMPERATURE: "SET_TEMPERATURE"
};

// initial state
const state = {
  all: []
};

// getters
const getters = {
  getTempCelsius() {
    return this.$store.state.temperature - 273.15;
  },

  getTempFarenheit() {
    const conv = k => (k - 273.15) * (9 / 5) + 32;
    return conv(this.$store.state.temperature);
  }
};

// actions
const actions = {};

// mutations
const mutations = {
  [MUTATIONS_TYPES.SET_TEMPERATURE](state, temp) {
    state.temperature = temp;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  MUTATIONS_TYPES
};
