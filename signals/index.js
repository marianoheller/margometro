const mongoose = require("mongoose");
const Signal = mongoose.model("Signal");
const map = require("lodash/map");
const values = require("lodash/values");
const mean = require("lodash/mean");
const reduce = require("lodash/reduce");
const fetchers = require("./fetchers");
const mappers = require("./mappers");
const config = require("./config");

const { SIGNAL_TYPES } = config;

/**
 * Creates an array thats has "t" number of "a" elements
 * @param {Number} t
 * @param {Any} a
 */
const cloner = (t, a) => new Array(t).fill(a);

/**
 * Calculates a the weighted mean of an array of values.
 * Higher magnitude values carry more weight than lower numbers.
 * @param {Array} vals Array of numbers
 */
const weightedMean = (vals = []) => {
  const sorted = vals.sort((a, b) => a - b);
  const weighted = reduce(
    vals,
    (acc, v, i) => [...acc, ...cloner(i + 1, v)],
    []
  );
  return mean(weighted);
};

const addNoise = a => a + 0.5 * Math.random();

const getValue = () =>
  Signal.getAllWithIds(values(SIGNAL_TYPES))
    .then(docs => map(docs, d => mappers[d.id](d.value)))
    .then(weightedMean)
    .then(addNoise)
    .catch(console.error);

module.exports = {
  config,
  cloner,
  weightedMean,
  fetchers,
  mappers,
  getValue
};
