require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./backend_Routes/userRoutes");
const port = 3000;

const app = express();
const URL = process.env.URL;

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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
