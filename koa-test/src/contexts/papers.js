import Router from 'koa-router'

const Papers = new Router()

Papers.get('/papers', (ctx, next) => {})

Papers.post('/papers', (ctx, next) => {})

Papers.get('/papers/:id', (ctx, next) => {})

Papers.put('/papers/:id', (ctx, next) => {})

Papers.delete('/papers/:id', (ctx, next) => {})

export default Papers