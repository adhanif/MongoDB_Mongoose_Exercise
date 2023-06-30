const express = require("express");
const eventRouter = express.Router();
const {
  createEvent,
  getAllEvents,
  getEventByID,
} = require("../backend_Controllers/eventController");

eventRouter.post("/", createEvent);
eventRouter.get("/", getAllEvents);
eventRouter.get("/:id", getEventByID);
module.exports = eventRouter;
