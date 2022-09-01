const { StatusCodes } = require('http-status-codes');
const { Product, User, Sale, SaleProduct } = require('../database/models');
const HttpException = require('../shared/HttpException');

const getAll = async () => {
  const products = await Product.findAll();
  return products;
};

const getOrderById = async ({ id }) => {
  const isValidSale = await Sale.findOne({ where: { id } });
  if (!isValidSale) throw new HttpException(StatusCodes.NOT_FOUND, 'Sale Not Found');
  const sale = await Sale.findOne({ where: { id },
    include: [{ model: User, as: 'seller', attributes: ['name'] },
    { model: Product, as: 'products', through: { attributes: ['quantity'] } }] });
  return sale;
};

const getAllSellers = async () => {
  const products = await User.findAll({ where: { role: 'seller' } });
  return products;
};

const checkout = async (body, { id: userId }) => {
  const { sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = body;
  const saleDate = new Date();

  const newSale = await Sale.create(
    { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status: 'Pendente' },
  );

  await SaleProduct.bulkCreate(products
    .map((product) => (
      { saleId: newSale.id, productId: product.productId, quantity: product.quantity }
    )));
  return newSale.id;
};

const getAllOrdersByClient = async (id) => {
  const products = await Sale.findAll({ where: { userId: id } });
  return products;
};

module.exports = {
  getAll,
  getOrderById,
  getAllSellers,
  checkout,
  getAllOrdersByClient,
};
