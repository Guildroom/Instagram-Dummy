const jsonwebtoken = require('jsonwebtoken');
const JWT_SECRET = 'sjakdhsdsadsakd'

module.exports = async (req,res,next) => {
    const token =req.header('Authorization');
    
    if(!token) {
        return res.status(401).json({
            message: 'no tokens found'
        })
    }

    const decode = jsonwebtoken.verify(token, JWT_SECRET)
    req.id = decode.id
    next()
}