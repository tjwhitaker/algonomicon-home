import Koa from 'koa'
import Logger from 'koa-logger'
import Router from './router'
import initDatabase from './database'

const App = new Koa()

initDatabase()

App.use(Logger())
App.use(Router())

App.listen(8000)