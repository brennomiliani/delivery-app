import { StatusCodes } from 'http-status-codes';
import User from '../database/models/user';
import HttpException from '../shared/HttpException';
import { generateJWTToken } from '../shared/JTWHelpers';

const findUser = async (user) => {
  const { email, password } = user;
  if (!email || !password) {
    throw new HttpException(
      StatusCodes.BAD_REQUEST,
      'All fields must be filled',
    );
  }
  const userFound = await User.findOne({ where: { email, password } });
  if (!userFound) {
    throw new HttpException(
      StatusCodes.UNAUTHORIZED,
      'Incorrect email or password',
    );
  }
  const { name, role } = userFound;
  const token = generateJWTToken({ name, email, role });
  return token;
};

export default {
  findUser,
};
