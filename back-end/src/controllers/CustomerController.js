const { StatusCodes } = require('http-status-codes');
const customerService = require('../services/CustomerService');

const getAll = async (_req, res) => {
  const result = await customerService.getAll();
  return res.status(StatusCodes.OK).json(result);
};

<<<<<<< HEAD
const checkout = async (req, res) => {
  const id = await customerService.checkout(req.body);
  return res.status(StatusCodes.OK).json({ id });
};

module.exports = {
  getAll,
  checkout,
};
=======
const getAllOrdersByClient = async (_req, res) => {
  const { email } = res.locals.payload;
  const result = await customerService.getAllOrdersByClient(email);
  return res.status(StatusCodes.OK).json(result);
};

module.exports = { getAll, getAllOrdersByClient };
>>>>>>> cb929ab9859dc5bc4b7fd7193a733ddc825c2578
