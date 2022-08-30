const { Router } = require('express');

const CustomerController = require('../controllers/CustomerController');
const authenticationMiddleware = require('../middlewares/authMiddleware');

const router = Router();

router.get('/products', CustomerController.getAll);
router.get('/order', authenticationMiddleware, CustomerController.getAllOrdersByClient);

router.post('/checkout', CustomerController.checkout);

module.exports = router;
