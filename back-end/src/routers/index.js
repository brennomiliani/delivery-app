const { Router } = require('express');
require('dotenv').config();
const LoginRouter = require('./loginRouter');
const CustomerRouter = require('./customerRouter');
const RegisterRouter = require('./registerRouter');
const SellerRouter = require('./sellerRouter');
const AdminRouter = require('./adminRouter');

require('express');

const indexRouter = Router();

indexRouter.use('/login', LoginRouter);
indexRouter.use('/customer', CustomerRouter);
indexRouter.use('/register', RegisterRouter);
indexRouter.use('/seller/orders', SellerRouter);
indexRouter.use('/admin', AdminRouter);

module.exports = indexRouter;
