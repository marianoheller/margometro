const d3Scale = require("d3-scale");
const getHours = require("date-fns/get_hours");
const getMinutes = require("date-fns/get_minutes");

const dataMap = [
  { d: 0, r: 0 },
  { d: 7 * 60 + 30, r: 0 },
  { d: 8 * 60, r: 50 },
  { d: 10 * 60 + 30, r: 60 },
  { d: 11 * 60 + 30, r: 85 },
  { d: 12 * 60, r: 30 },
  { d: 13 * 60, r: 40 },
  { d: 13 * 60 + 30, r: 70 },
  { d: 16 * 60 + 30, r: 80 },
  { d: 17 * 60 + 50, r: 100 },
  { d: 18 * 60, r: 40 },
  { d: 18 * 60 + 30, r: 20 },
  { d: 19 * 60 + 30, r: 10 },
  { d: 20 * 60 + 30, r: 0 },
  { d: 24 * 60, r: 0 }
];

const hourOfDayMapper = datetime => {
  const scale = d3Scale
    .scalePow()
    .exponent(Math.sqrt(2))
    .domain(dataMap.map(a => a.d))
    .range(dataMap.map(a => a.r))
    .clamp(true);
  const input = getHours(datetime) * 60 + getMinutes(datetime);
  return scale(input);
};

module.exports = hourOfDayMapper;
