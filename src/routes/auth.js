'use strict'

import Router from 'koa-router'
import passport from 'koa-passport'
import AccountModel from '../models/account'

const router = new Router()

router.get('/login', async (ctx, next) => {
    ctx.body = {
        "status" : "login page"
    }   
})

router.post('/login', async (ctx, next) => {
    let middleware = passport.authenticate('local', async(user, info) => {
        console.log("USER", user)
        if (user === false) {
            ctx.body = {
                'status' : 400
            }
        } else {
            await ctx.login(user)
            ctx.body = {
                user: user
            }
        }
    })
    await middleware.call(this, ctx, next)
})

router.post('/signup', async (ctx, next) => {
    console.log("CTX", ctx.request.body)
   AccountModel.insert(ctx.request.body)
})
router.get('/logout', async (ctx, newt) => {
    ctx.logout()
    ctx.redirect('/')
})

router.get('/status', async (ctx, next) => {
    ctx.body = {
        "isLogin" : ctx.isAuthenticated()
    }
})

export default router
