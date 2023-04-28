const express = require("express");
const router = express.Router();
const { uploadCsv, getAll, login } = require("../controller/csv");

router.post("/uploadCsv", uploadCsv);
router.get("/getAll", getAll);
router.post("/login", login);

module.exports = router;
