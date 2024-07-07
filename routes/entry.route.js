const express = require("express");
const router = express.Router();
const {
  getEntries,
  getEntryByID,
  createEntry,
  deleteEntry,
  updateEntryByID,
} = require("../controllers/entry.controller");

router.get("/", getEntries);
router.get("/:id", getEntryByID);
router.post("/", createEntry);
router.delete("/:id", deleteEntry);
router.put("/:id", updateEntryByID);

module.exports = router;
