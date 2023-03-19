const Ticket = require("../models/Ticket");
const Booking = require("../models/Booking");

exports.bookTicket = async (req, res) => {
  const { ticketId, numPassengers, passengers } = req.body;

  try {
    const ticket = await Ticket.findById(ticketId);
    if (!ticket) {
      return res.status(404).send({ message: "Ticket not found" });
    }

    // Check if requested number of seats are available
    if (numPassengers > ticket.availableSeats) {
      return res
        .status(400)
        .send({ message: "Requested number of seats not available" });
    }

    // Update available seats count
    const updatedTicket = await Ticket.findByIdAndUpdate(
      ticketId,
      { availableSeats: ticket.availableSeats - numPassengers },
      { new: true }
    );

    // Create booking object
    const booking = {
      ticket: updatedTicket._id,
      numPassengers: numPassengers,
      passengers: passengers,
    };

    // Save booking to database
    const savedBooking = await Booking.create(booking);

    res.status(201).json(savedBooking);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

// Edit booking
exports.editBooking = async (req, res) => {
  try {
    const { passengers, noOfPassengers } = req.body;
    const { bookingId } = req.params;
    const booking = await Booking.findById(bookingId).populate("ticket");
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    const ticket = booking.ticket;

    const newAvailableSeats =
      ticket.availableSeats + booking.numPassengers - Number(noOfPassengers);

    if (newAvailableSeats < 0) {
      return res.status(400).json({ error: "Not enough available seats" });
    }
    ticket.availableSeats = newAvailableSeats;
    const updatedTicket = await ticket.save();
    booking.numPassengers = noOfPassengers;
    booking.passengers = passengers;
    const updatedBooking = await booking.save();
    res.json({ booking: updatedBooking, ticket: updatedTicket });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

// Delete booking
exports.deleteBooking = async (req, res) => {
  try {
    const { bookingId } = req.params;
    const booking = await Booking.findById(bookingId).populate("ticket");
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    const ticket = booking.ticket;
    const newAvailableSeats = ticket.availableSeats + booking.numPassengers;
    ticket.availableSeats = newAvailableSeats;
    const updatedTicket = await ticket.save();
    const deletedBooking = await booking.remove();
    res.json({ message: "Deleted Succesfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("ticket");
    res.json(bookings);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
