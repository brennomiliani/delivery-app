const { Router } = require('express');
require('dotenv').config();
const LoginRouter = require('./loginRouter');

require('express');

const indexRouter = Router();

indexRouter.use('/login', LoginRouter);

module.exports = indexRouter;
