const { Product, Sale, User } = require('../database/models');

const getAll = async () => {
  const products = await Product.findAll();
  return products;
};

const getAllOrdersByClient = async (email) => {
  const result = await User.findOne({ where: { email } });
  const { id } = result.dataValues;
  const products = await Sale.findAll({ where: { userId: id } });
  return products[0];
};

module.exports = {
  getAll,
  getAllOrdersByClient,
};
