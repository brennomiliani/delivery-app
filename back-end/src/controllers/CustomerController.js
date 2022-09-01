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

const getAllSellers = async (_req, res) => {
  const result = await customerService.getAllSellers();
  return res.status(StatusCodes.OK).json(result);
};

const getAllOrdersByClient = async (_req, res) => {
  const { id } = res.locals.payload;
  const result = await customerService.getAllOrdersByClient(id);
  return res.status(StatusCodes.OK).json(result);
};

const checkout = async (req, res) => {
  const { payload } = res.locals;
  const saleId = await customerService.checkout(req.body, payload);
  return res.status(StatusCodes.CREATED).json({ saleId });
};

module.exports = {
  getAll,
  getById,
  getAllSellers,
  getAllOrdersByClient,
  checkout,
};
