const isWeekend = require("date-fns/is_weekend");
const isMonday = require("date-fns/is_monday");
const isTuesday = require("date-fns/is_tuesday");
const isWednesday = require("date-fns/is_wednesday");
const isThursday = require("date-fns/is_thursday");
const isFriday = require("date-fns/is_friday");

const dayOfWeekMapper = datetime => {
  if (isWeekend(datetime)) return 0;
  if (isMonday(datetime) || isTuesday(datetime) || isFriday(datetime))
    return 100;
  if (isThursday(datetime)) return 75;
  if (isWednesday(datetime)) return 50;
  return 100;
};

module.exports = dayOfWeekMapper;
