const express = require("express");
const router = express.Router();
const Csv = require("../models/Csv");
const csvParser = require("csv-parser");
const fs = require("fs");

exports.uploadCsv = (req, res) => {
  const results = [];
  fs.createReadStream(req.files.csvFile.tempFilePath)
    .pipe(csvParser())
    .on("data", (data) => {
      const {
        "SL NO": slNo,
        "Ad No": adNo,
        Name: name,
        "MAL/ARA": malAra,
        ENGLISH: english,
        "MAL II": malII,
        SS: ss,
        BS: bs,
        PET: pet,
        MATHS: maths,
        HINDI: hindi,
        CE: ce,
        TOTAL: total,
      } = data;

      results.push({
        slNo: parseInt(slNo),
        adNo,
        name,
        malAra,
        english,
        malII,
        ss,
        bs,
        pet,
        maths,
        hindi,
        ce,
        total,
      });
    })
    .on("end", () => {
      Csv.insertMany(results)
        .then(() => {
          res.status(201).json({ message: "CSV file uploaded successfully" });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: "Internal server error" });
        });
    });
};

exports.getAll = async (req, res) => {
  try {
    const results = await Csv.find({});
    res.status(200).json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  const { adNo } = req.body;
  try {
    const result = await Csv.findOne({ adNo });
    if (!result) {
      res.status(404).json({ error: "Student not found" });
      return;
    }

    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
