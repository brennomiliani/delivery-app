const { authenticateJWTToken } = require('../shared/JWTHelpers');

const authenticationMiddleware = async (req, res, next) => {
  const token = req.headers.authorization || '';

  const payload = await authenticateJWTToken(token);

  res.locals.payload = payload;

  next();
};

module.exports = authenticationMiddleware;
