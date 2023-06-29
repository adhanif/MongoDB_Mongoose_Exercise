require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./backend_Routes/userRoutes");
const eventRouter = require("./backend_Routes/eventRoutes");
const port = 3000;
const URL = process.env.URL;

const app = express();
app.use(express.json());

mongoose
  .connect(URL)
  .then(() => console.log("Connected to the database"))
  .catch((err) => {
    console.log("Error connecting to the database:", err);
  });

mongoose.connection.on("error", (err) => {
  console.log("Lost connection to the database", err);
});

app.use("/users", userRouter);
app.use("/events", eventRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
