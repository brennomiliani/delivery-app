const { Router } = require('express');
require('dotenv').config();
const LoginRouter = require('./loginRouter');
const CustomerRouter = require('./customerRouter');
const RegisterRouter = require('./registerRouter');
const SellerRouter = require('./sellerRouter');

require('express');

const indexRouter = Router();

indexRouter.use('/login', LoginRouter);
indexRouter.use('/customer', CustomerRouter);
indexRouter.use('/register', RegisterRouter);
indexRouter.use('/seller/orders', SellerRouter);

module.exports = indexRouter;
