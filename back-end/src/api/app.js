require('express-async-errors');
const express = require('express');
const httpErrorMiddleware = require('../middlewares/httpErrorMiddleware');
const routes = require('../routers');

const app = express();

app.use(express.json());

app.use('/', routes);

app.use(httpErrorMiddleware);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
