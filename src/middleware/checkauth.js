'use strict'

export default function checkauth() {
    return async function (ctx, next) {
        if (ctx.isAuthenticated()
            || ctx.path.indexOf('/api/') !== 0
            || ctx.path.indexOf('.html') >= 0) {
            await next()
        } else {
            ctx.body = {
                "status": 401
            }
        }
    }
}