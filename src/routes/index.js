'use strict'

import compose from 'koa-compose'
import Router from 'koa-router'


import RouterMain from './main'
import RouterAuth from './auth'

const router = new Router()

router.use('/api',  RouterMain.routes(), RouterMain.allowedMethods())
router.use('/auth', RouterAuth.routes(), RouterAuth.allowedMethods())

router.get('*', async (ctx, next) => {
    await ctx.render('./main')
})

export default function routes() {
    return compose(
        [
            router.routes(),
            router.allowedMethods()
        ]
    )
}
