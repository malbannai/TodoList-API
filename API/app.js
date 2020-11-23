const items = require("./items");
const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json(items);
});

app.listen(8000);
