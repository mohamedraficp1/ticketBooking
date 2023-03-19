const Atoa = require("../models/Atoa");
const Ticket = require("../models/Ticket");

exports.getAtoasByDepartureDate = async (req, res) => {
  try {
    const { departDate } = req.params;

    // Find all tickets with the given departure date
    const tickets = await Ticket.find({ departDate });

    if (tickets.length == 0) {
      // if no matching ticket is found, send a 404 error response
      return res
        .status(404)
        .json({ message: `Ticket with depart date ${departDate} not found` });
    }

    // Extract the Atoa ids from the tickets
    const atoaIds = tickets.map((ticket) => ticket.atoa);

    // Find all the Atoas with the extracted ids
    const atoas = await Atoa.find({ _id: { $in: atoaIds } });

    res.status(200).json({ data: atoas });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.getTicketsByAtoa = async (req, res) => {
  try {
    const { atoaId, departDate } = req.query;
    const atoa = await Atoa.findById(atoaId);

    if (!atoa) {
      return res.status(404).json({ message: "A to a not found" });
    }
    const tickets = await Ticket.find({ atoa: atoaId, departDate });
    if (tickets.length == 0) {
      return res.status(404).json({ message: "No matching Tickets found" });
    }

    res.json({ data: tickets });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
