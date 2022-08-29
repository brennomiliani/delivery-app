const { StatusCodes } = require('http-status-codes');
const customerService = require('../services/CustomerService');

const getAll = async (_req, res) => {
  const result = await customerService.getAll();
  return res.status(StatusCodes.OK).json(result);
};

const checkout = async (req, res) => {
  const id = await customerService.checkout(req.body);
  return res.status(StatusCodes.OK).json({ id });
};

module.exports = {
  getAll,
  checkout,
};
