// const { StatusCodes } = require('http-status-codes');
const registerService = require('../services/RegisterService');

const getAllUsers = async (_req, res) => {
  const users = await registerService.findUsers();
  res.status(200).json(users);
};

const createUser = async (req, res) => {
  const user = await registerService.create(req.body);
  res.status(201).json(user);
};

module.exports = { getAllUsers, createUser };