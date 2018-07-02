//index.js - get access to NodeJS runtime
const express = require('express')
require('./services/passport')

const app = express()

require('./routes/authRoutes')(app)

//Add support for environment configurations
const PORT = process.env.PORT || 5000

//Express tells NodeJS that it wants to listen
//to incoming requests on port 5000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))