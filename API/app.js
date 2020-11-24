const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const itemRoutes = require("./routes/items");

const items = require("./items");

const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/todos", itemRoutes);

app.listen(8000);
