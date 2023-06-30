const event = require("../models/event");

const createEvent = async (req, res) => {
  const { name, description, location, organizer } = req.body;
  //   console.log(name, description, location, organizer);
  try {
    const data = await event.create({
      name: name,
      description: description,
      location: location,
      organizer: organizer,
    });
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error retrieving users");
  }
};

//get all the events

const getAllEvents = async (req, res) => {
  try {
    const data = await event.find({});
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error retrieving users");
  }
};

const getEventByID = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await event.findById(id).populate("organizer");

    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error retrieving users");
  }
};

module.exports = { createEvent, getAllEvents, getEventByID };
