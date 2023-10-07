const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  shortLink: {
    type: String,
    unique: true,
    required: true,
  },
  originalName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const File = mongoose.model("File", fileSchema);

module.exports = File;
