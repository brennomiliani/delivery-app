const { StatusCodes } = require('http-status-codes');
const customerService = require('../services/CustomerService');

const getAll = async (_req, res) => {
  const result = await customerService.getAll();
  return res.status(StatusCodes.OK).json(result);
};

const getById = async (req, res) => {
  const result = await customerService.getOrderById(req.params);
  return res.status(StatusCodes.OK).json(result);
};

const getAllOrdersByClient = async (_req, res) => {
  const { email } = res.locals.payload;
  const result = await customerService.getAllOrdersByClient(email);
  return res.status(StatusCodes.OK).json(result);
};

module.exports = { getAll, getById, getAllOrdersByClient };
