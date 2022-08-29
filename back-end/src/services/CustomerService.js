const { Product, Sale, SaleProduct } = require('../database/models');

const getAll = async () => {
  const products = await Product.findAll();
  return products;
};

const checkout = async (body) => {
  const {
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, productId, quantity,
  } = body;
  const saleDate = new Date();
  const completeSaleInfo = {
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
    status: 'Pendente',
  };
  const newSale = await Sale.create(completeSaleInfo);
  await SaleProduct.create({ saleId: newSale.id, productId, quantity });
  return newSale.id;
};

module.exports = {
  getAll,
  checkout,
};
