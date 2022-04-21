const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const RouteUser = require('./routes/loginregister');
const cors = require('cors');
const app = express()

mongoose.connect("mongodb+srv://instagramdummy:instagramdummy@intagramdummy.uihiw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use(cors())
app.use(bodyParser.json());
app.use('/', RouteUser)

const homeroutes = require('../BackEnd/routes/home')
app.use('/home', homeroutes)

app.listen(5000, () => console.log('Server Started'))