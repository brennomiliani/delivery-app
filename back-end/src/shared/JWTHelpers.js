import * as jwt from 'jsonwebtoken';
import HttpException from './HttpException';

const jwtSecret = process.env.JWT_SECRET || 'secret_key';

const jwtDefaultConfig = {
  expiresIn: '24h',
  algorithm: 'HS256',
};

const generateJWTToken = (payload) => jwt.sign(payload, jwtSecret, jwtDefaultConfig);

const authenticateJWTToken = async (token) => {
  if (!token) {
    throw new HttpException(401, 'Sem Token');
  }

  try {
    const introspection = await jwt.verify(token, jwtSecret, jwtDefaultConfig);
    return introspection;
  } catch (e) {
    throw new HttpException(401, 'Token must be a valid token');
  }
};

export {
  generateJWTToken,
  authenticateJWTToken,
};
