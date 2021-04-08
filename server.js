const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

//bodyparser 
app.use(express.urlencoded({extended:false}))
app.use(express.json())

const db = process.env.DB

//mongo connect 
mongoose
    .connect( db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log( 'MongoDB connected' ))
    .catch( err => console.log( err ))

const port = process.env.PORT || 5000

app.listen( port, () => console.log( `express server running on ${ port }...` ))