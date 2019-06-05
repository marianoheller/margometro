const d3Scale = require("d3-scale");

/**
 * TODO: Definir un dominio q se mantenga en el tiempo va a ser un tema
 * @param {Number} rate
 */
const dollarPesoRate = rate => {
  var scale = d3Scale
    .scalePow()
    .exponent(Math.sqrt(2))
    .domain([40, 45, 50])
    .range([10, 50, 80]);
  return scale(rate);
};

module.exports = dollarPesoRate;
