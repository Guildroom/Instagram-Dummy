const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect("mongodb+srv://instagramdummy:instagramdummy@intagramdummy.uihiw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const homeroutes = require('../BackEnd/routes/home')
app.use('/home', homeroutes)

app.listen(3000, () => console.log('Server Started'))