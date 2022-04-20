const express = require('express')
const router = express.Router()
const UserModels = require('../models/user')
const PostModels = require('../models/post')
const CommentModels = require('../models/comment')
const Comment2Models = require('../models/comment2')
const FollowerModels = require('../models/follower')

router.get('/', async (req,res)=>{
    try {
        const userModels = await UserModels.find()
        res.json(userModels)
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
})

router.get('/follower/:id', async (req,res)=>{
    try{
        const followerModels = await FollowerModels.find({followingID : req.params.id}).populate("followerID")
        res.json(followerModels)
    } catch(e){
        res.status(500).json({message: e.message})
    }
})

router.get('/following/:id', async (req,res)=>{
    try{
        const followerModels = await FollowerModels.find({followerID : req.params.id}).populate("followingID")
        res.json(followerModels)
    } catch(e){
        res.status(500).json({message: e.message})
    }
})

router.post('/follow/:id', getauth, async (req,res)=>{
    followerID = res.userModels.id
    followingID = req.params.id
})

router.get('/getauth', getauth, (req,res)=>{
    res.json(res.userModels)
})

router.get('/comment/post/:id', async (req,res)=>{
    try{
        const commentModels = await CommentModels.find({postID : req.params.id}).sort({createAt: 'desc'})
        res.json(commentModels)
    }catch(e){
        res.status(500).json({message:e.message})
    }
})

router.get('/post/user/auth', getauth, async (req,res)=>{
    try{
        const postmodels = await PostModels.find({userID : res.userModels.id}).sort({createAt: 'desc'})
        res.json(postmodels)
    }catch(e){
        res.status(500).json({message: e.message})
    }
})

router.get('/post/user/:id', async (req,res)=>{
    try{
        const postmodels = await PostModels.find({userID : req.params.id}).sort({createAt: 'desc'})
        res.json(postmodels)
    }catch(e){
        res.status(500).json({message: e.message})
    }
})

router.get('/post/:id', async (req,res)=>{
    try{
        const postmodels = await PostModels.findById(req.params.id)
        res.json(postmodels)
    }catch(e){
        res.status(500).json({message: e.message})
    }
})

router.get('/:id', getUser, (req, res) => {
    res.json(res.userModels)
})

router.post('/comment/post/:id', getauth,async(req,res)=>{
    const commentModels = new CommentModels({
        userID : res.userModels.id,
        comment : req.body.comment,
        postID : req.params.id
    })
    
    try {
        const newcommentModels = await commentModels.save()
        res.status(201).json(newcommentModels)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.post('/post', getauth, async (req,res)=>{
    const postmodels = new PostModels({
        userID: res.userModels.id,
        caption: req.body.caption,
        Image: req.body.Image,
    })
    try {
        const newpostmodels = await postmodels.save()
        res.status(201).json(newpostmodels)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
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

async function getauth(req, res, next) {
    let id = "6257e33720eabb9f30a22ee5"
    let userModels
    try {
        userModels = await UserModels.findById(id)
        if (userModels == null) {
            return res.status(404).json({ message: 'Cannot find user' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
  
    res.userModels = userModels
    next()
}

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