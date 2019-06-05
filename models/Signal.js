const mongoose = require("mongoose");

const SignalSchema = new mongoose.Schema({
  id: { type: Number, unique: true, index: true, required: true },
  value: { type: Number, required: true },
  timestamp: { type: Number, required: true }
});

SignalSchema.statics.getAll = () =>
  new Promise((resolve, reject) => {
    Signal.find({}, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });

SignalSchema.statics.getAllWithIds = ids =>
  new Promise((resolve, reject) => {
    Signal.find({}, (err, results) => {
      if (err) reject(err);
      resolve(results.filter(d => ids.includes(d.id)));
    });
  });

SignalSchema.statics.getUnitializedIds = (ids = []) =>
  Signal.getAll().then(docs => {
    const docsIds = docs.map(d => d.id);
    return ids.filter(id => !docsIds.includes(id));
  });

SignalSchema.methods.saveOrUpdate = function() {
  return new Promise((resolve, reject) => {
    Signal.findOne({ id: this.id }, (err, res) => {
      if (err) reject(err);
      if (!res) {
        const doc = new Signal(this);
        doc.save();
      } else {
        res.value = this.value;
        res.timestamp = this.timestamp;
        res.save();
      }
    });
  });
};

const Signal = mongoose.model("Signal", SignalSchema);

module.exports = Signal;
