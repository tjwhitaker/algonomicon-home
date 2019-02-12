import Router from 'koa-router'

const Projects = new Router()

Projects.get('/projects', (ctx, next) => {})

Projects.post('/projects', (ctx, next) => {})

Projects.get('/projects/:id', (ctx, next) => {})

Projects.put('/projects/:id', (ctx, next) => {})

Projects.delete('/projects/:id', (ctx, next) => {})

export default Projects