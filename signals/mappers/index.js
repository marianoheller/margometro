const { SIGNAL_TYPES } = require("../config");
const dayOfWeek = require("./dayOfWeek");
const hourOfDay = require("./hourOfDay");
const whiteNoise = require("./whiteNoise");
const temperature = require("./temperature");
const dollarPesoRate = require("./dollarPesoRate");

module.exports = {
  [SIGNAL_TYPES.DAY_OF_WEEK]: dayOfWeek,
  [SIGNAL_TYPES.HOUR_OF_DAY]: hourOfDay,
  [SIGNAL_TYPES.WHITE_NOISE]: whiteNoise,
  [SIGNAL_TYPES.TEMPERATURE]: temperature,
  [SIGNAL_TYPES.DOLLAR_PESO_RATE]: dollarPesoRate
};
