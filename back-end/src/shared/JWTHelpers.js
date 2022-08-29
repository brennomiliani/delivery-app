const jwt = require('jsonwebtoken');
const fs = require('fs').promises;

const HttpException = require('./HttpException');

let jwtSecret = null;

const readJWTKey = async () => {
  const JWT_SECRET = await fs.readFile('./jwt.evaluation.key', 'utf-8');
  jwtSecret = JWT_SECRET;
};

readJWTKey();

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

module.exports = {
  generateJWTToken,
  authenticateJWTToken,
};
