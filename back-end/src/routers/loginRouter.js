const { Router } = require('express');

const LoginController = require('../controllers/LoginController');

const router = Router();

router.post('/', LoginController.findUser);

module.exports = router;
