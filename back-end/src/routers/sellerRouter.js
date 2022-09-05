const { Router } = require('express');

const SellerController = require('../controllers/SellerController');
const authenticationMiddleware = require('../middlewares/authMiddleware');
const validateStatusMiddleware = require('../middlewares/validateStatus');

const router = Router();

router.get('/', authenticationMiddleware, SellerController.getAllSales);
router.get('/:id', authenticationMiddleware, SellerController.findBySale);
router.patch('/:id',
  authenticationMiddleware,
  validateStatusMiddleware,
  SellerController.updateSaleStatus);

module.exports = router;
