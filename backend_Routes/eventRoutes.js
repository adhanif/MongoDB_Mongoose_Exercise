const express = require("express");
const eventRouter = express.Router();
const {
  createEvent,
  getAllEvents,
  getEventByID,
  joinEvent,
} = require("../backend_Controllers/eventController");

eventRouter.post("/", createEvent);
eventRouter.get("/", getAllEvents);
eventRouter.get("/:id", getEventByID);
eventRouter.patch("/:id/join", joinEvent);
module.exports = eventRouter;
