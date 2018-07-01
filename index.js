//index.js - get access to NodeJS runtime
const express = require('express')
//require passport
const passport = require('passport')
//Require google oauth strategy w/ Strategy method
const GoogleStrategy = require('passport-google-oauth20').Strategy
//Import keys object
const keys = require('./config/keys')

const app = express()

//Creates new instance of the Google Strategy w/ client keys
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, (accessToken, refreshToken, profile, done) => {
            console.log(accessToken)
            console.log(profile)
            console.log(refreshToken)
        }
    )   
)

//Route handlers

//Kick user into OAuth flow
app.get(
    '/auth/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

//Handle callback with code=#######
app.get('/auth/google/callback', passport.authenticate('google'))

//Add support for environment configurations
const PORT = process.env.PORT || 5000
//Express tells NodeJS that it wants to listen
//to incoming requests on port 5000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))