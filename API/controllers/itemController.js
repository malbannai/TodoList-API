let items = require("../items");

exports.itemList = (req, res) => res.json(items);

exports.itemCreate = (req, res) => {
  const id = items[items.length - 1].id + 1;
  const newItem = { id, ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
};

exports.itemDelete = (req, res) => {
  const { itemId } = req.params;
  const foundItem = items.find((item) => item.id === +itemId);
  if (foundItem) {
    items = items.filter((item) => item !== foundItem);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Item not found" });
  }
};

exports.itemPriority = (req, res) => {
  const { itemId } = req.params;
  const foundItem = items.find((item) => item.id === +itemId);
  if (foundItem.priority === "Low") {
    foundItem.priority = "Medium";
    res.status(204).end();
  } else if (foundItem.priority === "Medium") {
    foundItem.priority = "High";
    res.status(204).end();
  } else {
    foundItem.priority = "Low";
    res.status(204).end();
  }
};

exports.itemStatus = (req, res) => {
  const { itemId } = req.params;
  // console.log(itemId);
  const foundItem = items.find((item) => item.id === +itemId);
  foundItem.status = !foundItem.status;
  res.status(204).end();
};
