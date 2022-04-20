const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');

const JWT_SECRET = 'sjakdhsdsadsakd'

exports.Register = async (req,res) => {
    const { name, email, password } = req.body

    const emailUser = await User.findOne({email: email})
    const nameUser = await User.findOne({name: name})

    if(nameUser) {
        return res.status(404).json({
            status: false,
            message: 'username already exists'
        })
    }

    if(emailUser) {
        return res.status(404).json({
            status: false,
            message: 'email already exists'
        })
    }

    const hashPassword = await bcryptjs.hash(password, 10)
    const user = new User({
        name: name,
        email: email,
        password: hashPassword
    })

    user.save() 

        return res.status(201).json({
            status: true,
            message: 'User created successfully',
        })
}

exports.Login = async (req, res) => {
    const { name, password } = req.body

    const datauser = await User.findOne({$or: [{name: name}, {email: name}]})
    if(datauser)  {
        const passwordUser = await bcryptjs.compare(password, datauser.password)
        if(passwordUser){
            const data = {
                id: datauser._id
            }
            const token = await jsonwebtoken.sign(data, JWT_SECRET)
            return res.status (200).json({
                message: 'success',
                token: token
            })
        } else {
            return res.status(404).json({
                status: false,
                message: 'wrong password',
        })

        }
    } else {
        return res.status(404).json({
            status: false,
            message: 'name or email not exists',
        })
    }
}

exports.getSingleuser = async (req, res) => {
    const user = await User.findOne({_id: req.id})
    return res.status(200).json({
        message: 'success',
        data: user
    })
}