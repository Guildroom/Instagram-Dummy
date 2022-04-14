const express = require('express')
const router = express.Router()
const UserModels = require('../models/user')

router.get('/', async (req,res)=>{
    try {
        const userModels = await UserModels.find()
        res.json(userModels)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
})

router.get('/:id', getUser, (req, res) => {
    res.json(res.userModels)
})

router.post('/', async (req, res) => {
    const userModels = new UserModels({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const newUserModels = await userModels.save()
        res.status(201).json(newUserModels)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.userModels.remove()
        res.json({ message: 'Deleted User' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
  })

async function getUser(req, res, next) {
    let userModels
    try {
        userModels = await UserModels.findById(req.params.id)
        if (userModels == null) {
            return res.status(404).json({ message: 'Cannot find user' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
  
    res.userModels = userModels
    next()
}

module.exports = router