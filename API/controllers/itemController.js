let items = require("../items");

exports.itemList = (req, res) => res.json(items);

exports.itemCreate = (req, res) => {
  const id = items.length === 0 ? 1 : items[items.length - 1].id + 1;
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
  const priorities = {
    High: "Low",
    Low: "Medium",
    Medium: "High",
  };

  const { itemId } = req.params;
  const foundItem = items.find((item) => item.id === +itemId);
  foundItem.priority = priorities[foundItem.priority];
  res.status(204).end();
};

exports.itemStatus = (req, res) => {
  const { itemId } = req.params;
  const foundItem = items.find((item) => item.id === +itemId);
  foundItem.status = !foundItem.status;
  res.status(204).end();
};
