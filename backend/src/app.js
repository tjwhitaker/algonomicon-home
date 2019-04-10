import Koa from 'koa'
import cors from '@koa/cors'
import logger from 'koa-logger'
import parser from 'koa-body'
import { open, closed } from './routes'
import initDatabase from './db'

const app = new Koa()

initDatabase()

app.use(logger())
app.use(parser())
app.use(cors())
app.use(open.routes())
//app.use(auth())
app.use(closed.routes())

app.listen(8000)