import Koa from 'koa'
import Router from 'koa-router'
import logger from 'koa-logger'

const app = new Koa()
const router = new Router()
app.use(logger())

router.get('/', (ctx, next) => {
  ctx.body = 'Hello world'
})

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(8000)