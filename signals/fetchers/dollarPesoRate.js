const axios = require("axios");
const get = require("lodash/get");
const isNil = require("lodash/isNil");

module.exports = () => {
  const url = `https://free.currconv.com/api/v7/convert?q=USD_ARS&compact=ultra&apiKey=${
    process.env.API_KEY_DOLLARRATE
  }`;
  return axios.get(url).then(
    res => {
      const rate = get(res, "data.USD_ARS");
      if (isNil(rate)) return null;
      return rate;
    },
    () => null
  );
};
