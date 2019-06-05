const mongoose = require("mongoose");
const Signal = mongoose.model("Signal");
const min = require("lodash/min");
const map = require("lodash/map");
const filter = require("lodash/filter");
const values = require("lodash/values");
const forEach = require("lodash/forEach");
const { config, fetchers } = require("../signals");

const { UPDATE_INTERVALS_MS, SIGNAL_TYPES } = config;

const _update = ids =>
  Promise.all(map(ids, id => fetchers[id]()))
    .then(vals =>
      map(
        vals,
        (v, i) =>
          new Signal({
            id: ids[i],
            value: v,
            timestamp: Date.now()
          })
      )
    )
    .then(docs => filter(docs, o => isFinite(o.value)))
    .then(docs => {
      forEach(docs, doc => doc.saveOrUpdate());
    });

const initializeSignals = () => {
  return Signal.getUnitializedIds(values(SIGNAL_TYPES))
    .then(_update)
    .catch(console.error);
};

const updateSignalsProcess = () => {
  Signal.getAll()
    .then(persistedData => {
      const dataToRefresh = filter(persistedData, d => {
        const interval = UPDATE_INTERVALS_MS[d.id];
        const now = Date.now();
        return now > d.timestamp + interval;
      });
      return _update(map(dataToRefresh, d => d.id));
    })
    .catch(console.error);
};

const launchProcess = () => {
  const minInterval = min(values(UPDATE_INTERVALS_MS));
  initializeSignals().then(() => {
    updateSignalsProcess();
    setInterval(updateSignalsProcess, minInterval);
  });
};

module.exports = launchProcess;
