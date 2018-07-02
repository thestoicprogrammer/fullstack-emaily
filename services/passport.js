//Require passport
const passport = require('passport')
//Require google oauth strategy w/ Strategy method
const GoogleStrategy = require('passport-google-oauth20').Strategy
//Import keys object
const keys = require('../config/keys')

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