const { StatusCodes } = require('http-status-codes');
const sellerService = require('../services/SellerService');

const getAllSales = async (_req, res) => {
  const { email } = res.locals.payload;
  const response = await sellerService.getAllSales(email);
  res.status(StatusCodes.OK).json(response);
};

const findBySale = async (req, res) => {
  const { id } = req.params;
  const response = await sellerService.findBySale(id);
  res.status(StatusCodes.OK).json(response);
};

module.exports = { getAllSales, findBySale };