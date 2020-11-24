const express = require("express");
const router = express.Router();

const { itemCreate, itemList } = require("../controllers/itemController");

// Item List
router.get("/", itemList);

// Item Create
router.post("/", itemCreate);

module.exports = router;
