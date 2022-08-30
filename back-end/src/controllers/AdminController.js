// const { StatusCodes } = require('http-status-codes');
const loginService = require('../services/AdminService');

const findAllUsersButAdmin = async (req, res) => {
  const token = await loginService.findAllUsersButAdmin(req.body);
  res.status(200).json(token);
};

module.exports = { findAllUsersButAdmin };
