const { Product, User, Sale } = require('../database/models');
const { StatusCodes } = require('http-status-codes');
const HttpException = require('../shared/HttpException');

const getAll = async () => {
  const products = await Product.findAll();
  return products;
};

const getOrderById = async ({ id }) => {
  const isValidSale = await Sale.findOne({ where: { id } });
  if (!isValidSale) throw new HttpException(StatusCodes.NOT_FOUND, 'Sale Not Found');

  const { dataValues: { sellerId } } = await Sale.findOne({ where: { id } });
  const { name } = await User.findOne({ where: sellerId });
  const sale = await Sale.findOne({ where: { id },
    include: { model: User, as: 'seller', attributes: ['name'] },
  });

  // until next modification
  sale.seller.name = name;
  return sale;
};

module.exports = {
  getAll,
  getOrderById,
};
