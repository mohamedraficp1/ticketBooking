const express = require("express");
const router = express.Router();
const {
  createAtoa,
  editAtoa,
  getAllAtoa,
  deleteAtoa,
} = require("../controller/atoa");

router.post("/createAtoa", createAtoa);
router.get("/getAllAtoa", getAllAtoa);
router.put("/editAtoa/:id", editAtoa);
router.delete("/deleteAtoa/:id", deleteAtoa);

module.exports = router;
