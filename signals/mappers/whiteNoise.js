const d3Scale = require("d3-scale");

module.exports = noise => {
  const scale = d3Scale
    .scaleLinear()
    .domain([0, 1])
    .range([0, 10])
    .clamp(true);
  return scale(noise);
};
