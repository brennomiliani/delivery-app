// import { StatusCodes } from 'http-status-codes';
const { generateJWTToken } = require('../shared/JTWHelpers');

const HttpException = require('../shared/HttpException');

const { User } = require('../database/models');

const findUser = async ({ email, password }) => {
  if (!email || !password) {
    throw new HttpException(
      400,
      'All fields must be filled',
    );
  }
  const userFound = await User.findOne({ where: { email, password } });
  if (!userFound) {
    throw new HttpException(
      404,
      'Incorrect email or password',
    );
  }
  const { name, role } = userFound;
  const token = generateJWTToken({ name, email, role });
  return token;
};

module.exports = {
  findUser,
};
