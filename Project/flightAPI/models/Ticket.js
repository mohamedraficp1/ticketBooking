const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    onwardAirlineName: {
      type: String,
      required: true,
    },
    onwardAirlineNumber: {
      type: String,
      required: true,
    },
    returnAirlineName: {
      type: String,
      required: true,
    },
    returnAirlineNumber: {
      type: String,
      required: true,
    },
    departDate: {
      type: Date,
      required: true,
    },
    returnDate: {
      type: Date,
      required: true,
    },
    onwardTakeoffTime: {
      type: Date,
      required: true,
    },
    onwardLandingTime: {
      type: Date,
      required: true,
    },
    returnTakeoffTime: {
      type: Date,
      required: true,
    },
    returnLandingTime: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    availableSeats: {
      type: Number,
      required: true,
    },
    atoa: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Atoa",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);
