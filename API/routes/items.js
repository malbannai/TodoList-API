const express = require("express");
const router = express.Router();

const {
  itemCreate,
  itemList,
  itemStatus,
  itemDelete,
  itemPriority,
} = require("../controllers/itemController");

// Item List
router.get("/", itemList);

// Item Create
router.post("/", itemCreate);

// Item Delete
router.delete("/:itemId", itemDelete);

// Item Priority Update
router.put("/:itemId", itemPriority);

// Change the item status
router.put("/:itemId", itemStatus);

module.exports = router;
