const passport = require('passport')

module.exports = app => {
    //Kick user into OAuth flow
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    //Handle callback with code=#######
    app.get('/auth/google/callback', passport.authenticate('google'))
}
