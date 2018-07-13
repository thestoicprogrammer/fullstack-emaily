//Require passport
const passport = require('passport')
//Require google oauth strategy w/ Strategy method
const GoogleStrategy = require('passport-google-oauth20').Strategy

const mongoose = require('mongoose')

//Import keys object
const keys = require('../config/keys')

//One argument means we are fetching something from mongoose
//Two arguments means we are loading something into mongoose
const User = mongoose.model('users')


//Creates new instance of the Google Strategy w/ client keys
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleId: profile.id })
            .then((existingUser) => {
                if(existingUser) {
                    // we already have a record with the given profile ID
                } else {
                    // we don't have a user record with this ID, make a new record
                    new User({ googleId: profile.id })
                    .save()     
                    .then(user => done(null, user))
                }
            })
           
        }
    )   
)