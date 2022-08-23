import { StatusCodes } from 'http-status-codes';
import User from '../database/models/user';
import HttpException from '../shared/HttpExeption';
import jwt from '../utils/jwt';

const findUser = async (user ) => {
  const { email, password } = user;
  if (!email || !password) {
    throw new HttpException(
      StatusCodes.BAD_REQUEST,
      'All fields must be filled',
    );
  }
  const userFound = await User.findOne({ where: { email } });
  if (!userFound) {
    throw new HttpException(
      StatusCodes.UNAUTHORIZED,
      'Incorrect email or password',
    );
  }
  const token = jwt.generateJwtToken(user);
  return token;
};

export default {
  findUser,
};
