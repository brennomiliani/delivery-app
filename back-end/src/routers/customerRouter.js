const { Router } = require('express');

const CustomerController = require('../controllers/CustomerController');

const router = Router();

router.get('/products', CustomerController.getAll);

module.exports = router;
