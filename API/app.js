const tasks = require("./tasks");
const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json(tasks);
});

app.listen(8000);
