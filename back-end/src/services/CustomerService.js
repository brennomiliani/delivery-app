const { Product, Sale, User, SaleProduct } = require('../database/models');

const getAll = async () => {
  const products = await Product.findAll();
  return products;
};

const getAllSellers = async () => {
  const products = await User.findAll({ where: { role: 'seller' } });
  return products;
};

const checkout = async (body, payload) => {
  const {
    sellerId, totalPrice, deliveryAddress, deliveryNumber, products,
  } = body;
  const { id } = payload;
  const saleDate = new Date();
  const completeSaleInfo = {
    userId: id, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status: 'Pendente',
  };
  const newSale = await Sale.create(completeSaleInfo);
  const saleProductArr = products
    .map((product) => (
      { saleId: newSale.id, productId: product.productId, quantity: product.quantity }
    ));
  await SaleProduct.bulkCreate(saleProductArr);
  return newSale.id;
};

const getAllOrdersByClient = async (email) => {
  const result = await User.findOne({ where: { email } });
  const { id } = result.dataValues;
  const products = await Sale.findAll({ where: { userId: id } });
  return products[0];
};

module.exports = {
  getAll,
  checkout,
  getAllOrdersByClient,
  getAllSellers,
};
