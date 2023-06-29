const express = require("express");
const userRouter = express.Router();

const {
  createUser,
  getUsers,
  getUSerByID,
} = require("../backend_Controllers/userController");

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.get("/:id", getUSerByID);
module.exports = userRouter;
