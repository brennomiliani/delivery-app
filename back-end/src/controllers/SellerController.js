const { StatusCodes } = require('http-status-codes');
const sellerService = require('../services/SellerService');

const getAllSales = async (_req, res) => {
  const { email } = res.locals.payload;
  const response = await sellerService.getAllSales(email);
  res.status(StatusCodes.OK).json(response);
};

module.exports = { getAllSales };