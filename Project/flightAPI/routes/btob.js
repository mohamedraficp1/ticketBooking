const express = require("express");
const router = express.Router();
const {
  getAtoasByDepartureDate,
  getTicketsByAtoa,
} = require("../controller/btob");

router.get(
  "/bToB/getAtoasByDepartureDate/:departDate",
  getAtoasByDepartureDate
);

router.get("/bTob/getTicketsByAtoa", getTicketsByAtoa);

module.exports = router;
