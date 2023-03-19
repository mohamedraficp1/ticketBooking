const express = require("express");
const router = express.Router();
const {
  createTicket,
  editTicket,
  deleteTicket,
  getAllTickets,
} = require("../controller/ticket");

router.post("/tickets/createTicket", createTicket);
router.put("/tickets/editTicket/:id", editTicket);
router.delete("/tickets/deleteTicket/:id", deleteTicket);
router.get("/tickets/getAllTickets", getAllTickets);

module.exports = router;
