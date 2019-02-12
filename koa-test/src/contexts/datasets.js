import Router from 'koa-router'

const Datasets = new Router()

Datasets.get('/datasets', (ctx, next) => {})

Datasets.post('/datasets', (ctx, next) => {})

Datasets.get('/datasets/:id', (ctx, next) => {})

Datasets.put('/datasets/:id', (ctx, next) => {})

Datasets.delete('/datasets/:id', (ctx, next) => {})

export default Datasets