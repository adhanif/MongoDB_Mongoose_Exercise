const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: Date,
    required: true,
  },
  organizer: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

const event = mongoose.model("Event", eventSchema);

module.exports = event;
