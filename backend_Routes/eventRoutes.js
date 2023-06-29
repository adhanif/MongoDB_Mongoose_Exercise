const express = require("express");
const eventRouter = express.Router();
const { createEvent } = require("../backend_Controllers/eventController");

app.post("/", createEvent);
eventRouter;

module.exports = eventRouter;
