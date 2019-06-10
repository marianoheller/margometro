const d3Scale = require("d3-scale");

const K = 273;

const temperature = temp => {
  var scale = d3Scale
    .scalePow()
    .exponent(Math.sqrt(2))
    .domain([K + 0, K + 10, K + 20, K + 30, K + 40])
    .range([100, 40, 50, 70, 100])
    .clamp(true);
  return scale(temp);
};

module.exports = temperature;
