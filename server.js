const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors')


const app = express();
app.use(cors())

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World! DB-Connection");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// connecting mongodb
mongoose
  .connect("mongodb://localhost:27017/test-app")
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(err);
  });
