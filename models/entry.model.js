const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;
