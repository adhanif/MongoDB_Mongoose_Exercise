require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const port = 3000;
const app = express();
const URL = process.env.URL;

app.use(express.json());
//Initial connecting
mongoose
  .connect(URL)
  .then(() => console.log("connected to db"))
  .catch((err) => {
    console.log("error connecting to db", err);
  });

//After Initial connecting

mongoose.connection.on("error", (err) => {
  console.log("lost connection", err);
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`);
// });
