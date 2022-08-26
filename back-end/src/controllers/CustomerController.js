const { StatusCodes } = require('http-status-codes');
const customerService = require('../services/CustomerService');

const getAll = async (_req, res) => {
  const result = await customerService.getAll();
  return res.status(StatusCodes.OK).json(result);
};

module.exports = { getAll };
