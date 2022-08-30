const { Router } = require('express');

const CustomerController = require('../controllers/CustomerController');
const authenticationMiddleware = require('../middlewares/authMiddleware');

const router = Router();

router.get('/products', CustomerController.getAll);
router.get('/order', authenticationMiddleware, CustomerController.getAllOrdersByClient);

router.get('/orders/:id', authenticationMiddleware, CustomerController.getById);

module.exports = router;
