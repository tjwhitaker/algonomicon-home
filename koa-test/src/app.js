import Koa from 'koa'
import logger from 'koa-logger'
import parser from 'koa-body'
import router from './router'
import initDatabase from './database'

const app = new Koa()

initDatabase()

app.use(logger())
app.use(parser())
app.use(router())

app.listen(8000)