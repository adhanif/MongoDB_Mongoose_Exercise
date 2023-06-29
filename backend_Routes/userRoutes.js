const express = require("express");
const userRouter = express.Router();

const {
  createUser,
  getUsers,
} = require("../backend_Controllers/userController");

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
module.exports = userRouter;
