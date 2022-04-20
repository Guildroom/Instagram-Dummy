const {check, validationResult} = require('express-validator');

exports.runValidation = (req,res,next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(404).json({
            status: false,
            message: errors.array()[0].msg
        })
    }
    next()
}

exports.validationRegister = [
    check('name', 'username cannot be empty').notEmpty(),
    check('email', 'email cannot be empty').notEmpty().matches(/.+\@.+\..+/).withMessage('email should use @'),
    check('password', 'password cannot be empty').notEmpty().isLength({ min: 6}).withMessage('password should be atleast 6 characters'),
]

exports.validationLogin = [
    check('name', 'username cannot be empty').notEmpty(),
    check('password', 'password cannot be empty')
]