require('express-async-errors');
const Cors = require('cors');
const express = require('express');
const httpErrorMiddleware = require('../middlewares/httpErrorMiddleware');
const routes = require('../routers');

const app = express();
app.use(Cors());

app.use(express.json());

app.use('/', routes);

app.use(httpErrorMiddleware);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
