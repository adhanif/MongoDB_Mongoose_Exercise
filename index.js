require("dotenv").config();
require("./db");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./backend_Routes/userRoutes");
const eventRouter = require("./backend_Routes/eventRoutes");
const port = 3001;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/events", eventRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
