const mongoose = require("mongoose");

const csvSchema = new mongoose.Schema({
  slNo: { type: Number },
  adNo: { type: String },
  name: { type: String },
  malAra: { type: String },
  english: { type: String },
  malII: { type: String },
  ss: { type: String },
  bs: { type: String },
  pet: { type: String },
  maths: { type: String },
  hindi: { type: String },
  ce: { type: String },
  total: { type: String },
});

const Csv = mongoose.model("Csv", csvSchema);

module.exports = Csv;
