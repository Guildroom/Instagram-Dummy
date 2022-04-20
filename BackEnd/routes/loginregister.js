const express = require('express');
const router = express.Router()
const{ Register, Login, getSingleuser } = require('../loginregister/user.controller');
const { runValidation, validationRegister, validationLogin } = require('../loginregister/validation');
const middleware = require('../loginregister/middleware');

router.post('/register', validationRegister, runValidation, Register);
router.post('/login', validationLogin, runValidation, Login);
router.get('/user',middleware,  getSingleuser)

module.exports = router