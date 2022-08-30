const { StatusCodes } = require('http-status-codes');
const customerService = require('../services/CustomerService');

const getAll = async (_req, res) => {
  const result = await customerService.getAll();
  return res.status(StatusCodes.OK).json(result);
};

const checkout = async (req, res) => {
  const { payload } = res.locals;
  const id = await customerService.checkout(req.body, payload);
  return res.status(StatusCodes.OK).json({ id });
};

const getAllOrdersByClient = async (_req, res) => {
  const { email } = res.locals.payload;
  const result = await customerService.getAllOrdersByClient(email);
  return res.status(StatusCodes.OK).json(result);
};

module.exports = {
  getAll,
  checkout,
  getAllOrdersByClient,
};