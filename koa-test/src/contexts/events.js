import Router from 'koa-router'

const Events = new Router()

Events.get('/events', (ctx, next) => {})

Events.post('/events', (ctx, next) => {})

Events.get('/events/:id', (ctx, next) => {})

Events.put('/events/:id', (ctx, next) => {})

Events.delete('/events/:id', (ctx, next) => {})

export default Events