'use strict'

import passport from 'koa-passport'
import AccountModel from '../models/account'

export default () => {
    passport.serializeUser(function(user, done) {
        console.log("SERIALIZE USER", user)
        done(null, user.first_name)
    })

    passport.deserializeUser(function(first_name, done) {
        console.log("DESERIALIZE USER", first_name)
        AccountModel.findOne(first_name)
            .then(user => {
                if (user) {
                    done(null, user)
                }
                done("User not found", null)
            })
    })

    var LocalStrategy = require('passport-local').Strategy

    passport.use(new LocalStrategy(function(username, password, done) {
        AccountModel.verify(username, password)
            .then(function(result) {
                console.log("result", result)
                if(result != null) {
                    done(null, result)
                }  else {
                    done(null, false)
                }
            })
    }))
}

