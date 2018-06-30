//index.js - get access to NodeJS runtime
const express = require('express')
const app = express ()

//Route handler
app.get('/', (req,res) => {
    res.send({hi: 'there'})
})

const PORT = process.env.PORT || 5000
//Express tells NodeJS that it wants to listen
//to incoming requests on port 5000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))