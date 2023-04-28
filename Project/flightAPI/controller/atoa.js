const Atoa = require("../models/Atoa");

exports.createAtoa = async (req, res) => {
  const { destinationFrom, destinationTO, iataFrom, iataTo } = req.body;

  if (!destinationFrom || !destinationTO || !iataFrom || !iataTo) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newAtoa = await Atoa.create({
      destinationFrom,
      destinationTO,
      iataFrom,
      iataTo,
    });
    res
      .status(201)
      .json({ message: "A to a created successfully", data: newAtoa });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAllAtoa = async (req, res) => {
  try {
    const allAtoa = await Atoa.find();
    res.status(200).json({ data: allAtoa });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.editAtoa = async (req, res) => {
  const { destinationFrom, destinationTO, iataFrom, iataTo } = req.body;
  const atoaId = req.params.id;

  if (!destinationFrom || !destinationTO || !iataFrom || !iataTo) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const updateAtoa = await Atoa.findByIdAndUpdate(
      atoaId,
      { destinationFrom, destinationTO, iataFrom, iataTo },
      { new: true }
    );
    if (!updateAtoa) {
      return res.status(404).json({ error: "A to a not found" });
    }
    res
      .status(200)
      .json({ message: "A to a updated successfully", data: updateAtoa });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.deleteAtoa = async (req, res) => {
  const atoaId = req.params.id;
  try {
    const deletedAtoa = await Atoa.findByIdAndDelete(atoaId);
    if (!deletedAtoa) {
      return res.status(404).json({ error: "A to a not found" });
    }
    res.status(200).json({ message: "A to a deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};
