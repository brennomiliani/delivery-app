const { Router } = require('express');
require('dotenv').config();
const LoginRouter = require('./loginRouter');
const CustomerRouter = require('./customerRouter');
const RegisterRouter = require('./registerRouter');
const authMiddleware = require('../middlewares/authMiddleware');

require('express');

const indexRouter = Router();

indexRouter.use('/login', authMiddleware, LoginRouter);
indexRouter.use('/customer', CustomerRouter);

indexRouter.use('/register', RegisterRouter);

module.exports = indexRouter;
