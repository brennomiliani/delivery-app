const { Router } = require('express');

const adminController = require('../controllers/AdminController');

const router = Router();

router.post('/manage', adminController.findAllUsersButAdmin);

module.exports = router;
