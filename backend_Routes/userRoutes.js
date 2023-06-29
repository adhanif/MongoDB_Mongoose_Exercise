const express = require("express");
const userRouter = express.Router();

const {
  createUser,
  getUsers,
  getUSerByID,
  updateUSerByID,
} = require("../backend_Controllers/userController");

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.get("/:id", getUSerByID);
userRouter.put("/:id", updateUSerByID);
module.exports = userRouter;
