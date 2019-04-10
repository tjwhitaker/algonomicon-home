import Koa from 'koa'
import cors from '@koa/cors'
import logger from 'koa-logger'
import parser from 'koa-body'
import jwt from 'koa-jwt'
import initialize from './config'
import { open, closed } from './routes'

const app = new Koa()

initialize()

app.use(logger())
app.use(parser())
app.use(cors())
app.use(open.routes())
app.use(jwt({ secret: process.env.SECRET, cookie: 'token' }))
app.use(closed.routes())

app.listen(8000)