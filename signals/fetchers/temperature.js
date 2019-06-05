const axios = require("axios");
const get = require("lodash/get");
const isNil = require("lodash/isNil");

module.exports = () => {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=-34.8&lon=-58.8&APPID=${
    process.env.API_KEY_WEATHER
  }`;
  return axios.get(url).then(
    res => {
      const rate = get(res, "data.main.temp");
      if (isNil(rate)) return null;
      return rate;
    },
    () => null
  );
};
