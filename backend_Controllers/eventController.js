const event = require("../models/event");

const createEvent = async (req, res) => {
  const { name, description, location, organizer } = req.body;
  //   console.log(name, description, location, organizer);
  try {
    const events = await event
      .create({
        name: name,
        description: description,
        location: location,
        organizer: organizer,
      })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error retrieving users");
  }
};

//get all the events

const getAllEvents = async (req, res) => {
  try {
    await event
      .find()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error retrieving users");
  }
};

const getEventByID = async (req, res) => {
  try {
    // const { organizer } = req.body;
    // console.log(organizer);
    const { id } = req.params;
    console.log(id);
    await event
      .findById(id)
      .populate("organizer")

      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error retrieving users");
  }
};

module.exports = { createEvent, getAllEvents, getEventByID };
