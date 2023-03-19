const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    ticket: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
      required: true,
    },
    numPassengers: {
      type: Number,
      required: true,
    },
    passengers: {
      type: [
        {
          name: {
            type: String,
            required: true,
          },
        },
      ],
      required: true,
    },
    markUp: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
