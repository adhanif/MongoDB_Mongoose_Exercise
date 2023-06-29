const express = require("express");
const userRouter = express.Router();

const { createUser } = require("../backend_Controllers/userController");

userRouter.post("/", createUser);

module.exports = userRouter;
