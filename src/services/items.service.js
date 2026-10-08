const repository = require("../repositories/items.repository");

exports.getItems = async () => {
  return await repository.getAll();
};

exports.getItemById = async (id) => {
  return await repository.getById(id);
};

exports.createItem = async (data) => {

  const itemData = {
    name: data.name,
    price: Number(data.price),
    stock: Number(data.stock),
    minimumStock: Number(data.minimumStock),

    createdAt: new Date().toISOString(),
  };

  const item = await repository.create(itemData);

  return item;
};

exports.updateItem = async (id, data) => {
  return await repository.update(id, {
    name: data.name,
    price: Number(data.price),
    stock: Number(data.stock),
    minimumStock: Number(data.minimumStock)
  });
};

exports.deleteItem = async (id) => {
  await repository.remove(id);
};