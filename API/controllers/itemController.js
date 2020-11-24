let items = require("../items");

exports.itemList = (req, res) => res.json(items);

exports.itemCreate = (req, res) => {
  const id = items[items.length - 1].id + 1;
  const newItem = { id, ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
};

exports.itemStatus = (req, res) => {
  const { itemId } = req.params;
  // console.log(itemId);
  const foundItem = items.find((item) => item.id === +itemId);
  foundItem.status = !foundItem.status;
  res.status(204).end();
};
