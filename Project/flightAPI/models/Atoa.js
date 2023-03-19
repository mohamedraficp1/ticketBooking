const mongoose = require("mongoose");
const atoaSchema = new mongoose.Schema(
  {
    destinationFrom: {
      type: String,
    },
    destinationTO: {
      type: String,
    },
    iataFrom: {
      type: String,
    },
    iataTo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Atoa", atoaSchema);
