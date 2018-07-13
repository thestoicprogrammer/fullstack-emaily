const mongoose = require('mongoose')
const { Schema } = mongoose

//Our Schema will describe what every record and its
//properties will look like. Also - we can freely
//add and subtract properties as we see fit.
const userSchema = new Schema ({
    googleId: String
})

//Create the model collection class
//1st argument is name of model collection class
//2nd argument is schema that you want to use
//By using this command, we are telling
//mongoose that we want to create a collection called users
mongoose.model('users', userSchema)