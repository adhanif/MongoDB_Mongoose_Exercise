const user = require("../models/user");

const createUser = async (req, res) => {
  try {
    const { email, name, age, phoneNumber, isActive } = req.body;
    console.log(req.body);
    await user.create({
      email: email,
      name: name,
      age: age,
      phoneNumber: phoneNumber,
      isActive: isActive,
    });
    console.log("User created");
    res.send("User created");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating user");
  }
};

// get user by query active query parameter `/users?active=true` or `/users?active=false`  or all users
const getUsers = async (req, res) => {
  try {
    const { active } = req.query;

    if (active) {
      await user
        .find({ isActive: active })
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    } else {
      await user
        .find()
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error retrieving users");
  }
};

// accepts a GET request on path ‘/users/:id` to retrieve the user with the matching url parameter from the db

const getUSerByID = async (req, res) => {
  try {
    const id = req.params.id;
    // console.log(id);
    await user
      .findById(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  } catch (error) {}
};

//PUT request on path ‘/users/:id` to update the user with the matching url parameter from the db

const updateUSerByID = async (req, res) => {
  try {
    const id = req.params.id;
    const { email, name, age, phoneNumber, isActive } = req.body;
    // console.log(email, name, age, phoneNumber, isActive);
    await user
      .findByIdAndUpdate(
        id,
        { email, name, age, phoneNumber, isActive },
        { new: true }
      )
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  } catch (error) {}
};

module.exports = { createUser, getUsers, getUSerByID, updateUSerByID };
