const { Router } = require('express');
require('dotenv').config();
const LoginRouter = require('./loginRouter');
const CustomerRouter = require('./customerRouter'); 

require('express');

const indexRouter = Router();

indexRouter.use('/login', LoginRouter);
indexRouter.use('/customer', CustomerRouter);

module.exports = indexRouter;
