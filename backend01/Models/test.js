const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({
  name: { type: String, required: true },
  add: { type: String, required: true },
  age: { type: Number }
});

const Model = new mongoose.model("kya-beta", mySchema);

module.exports = Model;