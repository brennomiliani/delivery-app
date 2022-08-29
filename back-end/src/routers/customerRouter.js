const { Router } = require('express');

const CustomerController = require('../controllers/CustomerController');
const { authenticationMiddleware } = require('../middlewares/auth.middleware');

const router = Router();

router.get('/products', CustomerController.getAll);
router.get('/order', authenticationMiddleware, CustomerController.getAllOrdersByClient);

module.exports = router;
