const { SIGNAL_TYPES } = require("../config");
const datetime = require("./datetime");
const whiteNoise = require("./whiteNoise");
const temperature = require("./temperature");
const dollarPesoRate = require("./dollarPesoRate");

module.exports = {
  [SIGNAL_TYPES.DAY_OF_WEEK]: datetime,
  [SIGNAL_TYPES.HOUR_OF_DAY]: datetime,
  [SIGNAL_TYPES.WHITE_NOISE]: whiteNoise,
  [SIGNAL_TYPES.TEMPERATURE]: temperature,
  [SIGNAL_TYPES.DOLLAR_PESO_RATE]: dollarPesoRate
};
