import Router from 'koa-router'

const Articles = new Router()

Articles.get('/articles', (ctx, next) => {})

Articles.post('/articles', (ctx, next) => {})

Articles.get('/articles/:id', (ctx, next) => {})

Articles.put('/articles/:id', (ctx, next) => {})

Articles.delete('/articles/:id', (ctx, next) => {})

export default Articles