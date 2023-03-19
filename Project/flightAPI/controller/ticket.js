const Ticket = require("../models/Ticket");

// Create Ticket
exports.createTicket = async (req, res) => {
  try {
    const {
      onwardAirlineName,
      onwardAirlineNumber,
      returnAirlineName,
      returnAirlineNumber,
      departDate,
      returnDate,
      onwardTakeoffTime,
      onwardLandingTime,
      returnTakeoffTime,
      returnLandingTime,
      price,
      availableSeats,
      atoa,
    } = req.body;

    // Check if all required fields are present
    if (
      !onwardAirlineName ||
      !onwardAirlineNumber ||
      !returnAirlineName ||
      !returnAirlineNumber ||
      !departDate ||
      !returnDate ||
      !onwardTakeoffTime ||
      !onwardLandingTime ||
      !returnTakeoffTime ||
      !returnLandingTime ||
      !price ||
      !availableSeats ||
      !atoa
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const ticket = new Ticket({
      onwardAirlineName,
      onwardAirlineNumber,
      returnAirlineName,
      returnAirlineNumber,
      departDate,
      returnDate,
      onwardTakeoffTime,
      onwardLandingTime,
      returnTakeoffTime,
      returnLandingTime,
      price,
      availableSeats,
      atoa,
    });

    const savedTicket = await ticket.save();
    res.status(200).json(savedTicket);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

// Edit Ticket
exports.editTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).send("Ticket not found");
    }
    const updates = Object.keys(req.body);
    updates.forEach((update) => (ticket[update] = req.body[update]));
    const updatedTicket = await ticket.save();
    res.send({ message: "A to a updated successfully", data: updatedTicket });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

// Delete Ticket
exports.deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).send("Ticket not found");
    }
    await ticket.remove();
    res.send("Ticket deleted");
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

// Get All Tickets
exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.send({ data: tickets });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
