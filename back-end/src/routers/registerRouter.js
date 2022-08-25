const { Router } = require('express');

const RegisterController = require('../controllers/RegisterController');

const validateUser = require('../middlewares/validateUser');

const router = Router();

router.get('/', RegisterController.getAllUsers);

router.post('/', validateUser, RegisterController.createUser);

module.exports = router;
