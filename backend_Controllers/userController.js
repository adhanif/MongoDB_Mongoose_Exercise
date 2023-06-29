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

module.exports = { createUser };
