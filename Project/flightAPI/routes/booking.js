const express = require("express");
const router = express.Router();
const {
  bookTicket,
  getBookings,
  editBooking,
  deleteBooking,
} = require("../controller/booking");

router.post("/booking/bookTicket", bookTicket);
router.get("/booking/getAllBooking", getBookings);
router.put("/booking/editBooking/:bookingId", editBooking);
router.delete("/booking/deleteBooking/:bookingId", deleteBooking);

module.exports = router;
