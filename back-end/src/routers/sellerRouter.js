const { Router } = require('express');

const SellerController = require('../controllers/SellerController');
const authenticationMiddleware = require('../middlewares/authMiddleware');

const router = Router();

router.get('/', authenticationMiddleware, SellerController.getAllSales);
router.get('/:id', authenticationMiddleware, SellerController.findBySale);

module.exports = router;
