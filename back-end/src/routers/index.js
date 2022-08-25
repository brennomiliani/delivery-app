const { Router } = require('express');
require('dotenv').config();
const LoginRouter = require('./loginRouter');
const CustomerRouter = require('./customerRouter'); 
const RegisterRouter = require('./registerRouter');

require('express');

const indexRouter = Router();

indexRouter.use('/login', LoginRouter);
indexRouter.use('/customer', CustomerRouter);

indexRouter.use('/register', RegisterRouter);

module.exports = indexRouter;
