//index.js - get access to NodeJS runtime
const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')


mongoose.connect(keys.mongoURI)

const app = express()

require('./routes/authRoutes')(app)

//Add support for environment configurations
const PORT = process.env.PORT || 5000

//Express tells NodeJS that it wants to listen
//to incoming requests on port 5000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))