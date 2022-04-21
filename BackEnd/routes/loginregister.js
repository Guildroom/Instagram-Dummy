const express = require('express');
const router = express.Router()
const{ Register, Login, getSingleuser } = require('../controllers/userController');
const { runValidation, validationRegister, validationLogin } = require('../utils/validation');
const middleware = require('../middleware/middleware');

router.post('/register', validationRegister, runValidation, Register);
router.post('/login', validationLogin, runValidation, Login);
router.get('/user',middleware,  getSingleuser)

module.exports = router