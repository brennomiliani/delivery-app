// import { StatusCodes } from 'http-status-codes';
const md5 = require('md5');
const { UNAUTHORIZED } = require('http-status-codes');
const { generateJWTToken } = require('../shared/JWTHelpers');
const HttpException = require('../shared/HttpException');
const { User } = require('../database/models');

const findAllUsersButAdmin = async ({ email, password }) => {
  if (!email || !password) {
    throw new HttpException(400, 'All fields must be filled');
  }
  const hash = md5(password);
  const userFound = await User.findOne({ where: { email, password: hash } });
  if (!userFound) {
    throw new HttpException(404, 'Incorrect email or password');
  }
  const { name, role } = userFound;
  if (role !== 'administrator') throw new HttpException(UNAUTHORIZED, 'user must be admin');
  console.log(role);
  generateJWTToken({ name, email, role });
  const allUsers = await User.findAll();
  return allUsers;
};

module.exports = {
  findAllUsersButAdmin,
};
