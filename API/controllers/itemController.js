let items = require("../items");

exports.itemList = (req, res) => res.json(items);

exports.itemCreate = (req, res) => {
  const id = items[items.length - 1].id + 1;
  const newItem = { id, ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
};
