const express = require("express");
const router = express.Router();

const {
  itemCreate,
  itemList,
  itemStatus,
} = require("../controllers/itemController");

// Item List
router.get("/", itemList);

// Item Create
router.post("/", itemCreate);

// Change the item status
router.put("/:itemId", itemStatus);

module.exports = router;
