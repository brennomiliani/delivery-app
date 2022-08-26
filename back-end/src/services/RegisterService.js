// import { StatusCodes } from 'http-status-codes';
// const { generateJWTToken } = require('../shared/JTWHelpers');
const { Op } = require('sequelize');
const crypto = require('crypto');
const HttpException = require('../shared/HttpException');
const { User } = require('../database/models');
const { generateJWTToken } = require('../shared/JTWHelpers');

const findUsers = async () => {
  const users = await User.findAll();
  return users;
};

const create = async ({ name, email, password }) => {
  const userFound = await User.findOne({ where: { [Op.or]: [{ name }, { email }] } });
  if (userFound) {
    throw new HttpException(409, 'Name or email already taken.');
  }

  // const secret = 'segredo muito dificil';
  const hashPassword = crypto.createHash('md5').update(password).digest('hex');

  await User.create({ name, email, password: hashPassword, role: 'customer' });
  const token = generateJWTToken({ name, email, role: 'customer' });
  return { token, role: 'customer' };
};

module.exports = {
  findUsers,
  create,
};
