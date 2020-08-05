var express = require('express')
var app = express()
var mongoose = require('mongoose')
var { config } = require('../config')
var cors = require('cors')

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))


// Set here your CORS Policy
app.use(cors())


mongoose.connect(config.db.TEST, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{console.log('DB Connected')})
    .catch(()=>{console.log('I am Error, DB not connected')})

app.use('/api/v1', require('../routes'))

module.exports = { app }