const Entry = require("../models/entry.model");

// get all entries
const getEntries = async (req, res) => {
  try {
    const entries = await Entry.find().sort({ createdAt: -1 });
    res.status(200).json({ entries });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.name });
  }
};

// get entry by ID
const getEntryByID = async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);
    res.status(200).json({ entry });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.name });
  }
};

// update entry by ID
const updateEntryByID = async (req, res) => {
  const { _id, username } = req.body;

  Entry.findByIdAndUpdate({ _id: _id }, { username: username }, { new: true })
    .then((entry) => {
      console.log(entry);
      res.status(200).json({ entry });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error: error.name });
    });
};

// create entry
const createEntry = async (req, res) => {
  try {
    const entry = await Entry.create(req.body);
    res.status(200).json({ entry });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.name });
  }
};

//delete entry
const deleteEntry = async (req, res) => {
  try {
    const entry = await Entry.findByIdAndDelete(req.params.id);
    res.status(200).json({ entry });
    console.log("Deleted entry", entry)
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.name });
  }
};

module.exports = {
  getEntries,
  getEntryByID,
  updateEntryByID,
  createEntry,
  deleteEntry,
};
