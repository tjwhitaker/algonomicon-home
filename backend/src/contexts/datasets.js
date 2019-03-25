import Router from 'koa-tree-router'
import mongoose from 'mongoose'
import authorize from '../auth'

////////////
// Schema //
////////////

const Dataset = mongoose.model('Dataset', {
  name: String,
  slug: String,
  description: String,
  content: String,
  instances: String,
  format: String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
})

////////////
// Routes //
////////////

const router = new Router()

router.get('/datasets', async (ctx) => {
  const datasets = await Dataset.find()

  ctx.response.body = datasets
})

router.post('/datasets', async (ctx) => {
  authorize(ctx)

  const dataset = new Dataset(ctx.request.body)
  await dataset.save()

  ctx.response.body = dataset
})

router.get('/datasets/:id', async (ctx) => {
  const dataset = await Dataset.findById(ctx.params.id)

  ctx.response.body = dataset
})

router.put('/datasets/:id', async (ctx) => {
  authorize(ctx)

  const dataset = await Dataset.findByIdAndUpdate(ctx.params.id, ctx.request.body)

  ctx.response.body = dataset
})

router.delete('/datasets/:id', async (ctx) => {
  authorize(ctx)

  await Dataset.findByIdAndRemove(ctx.params.id)

  ctx.response.body = {
    status: `Deleted dataset:${ctx.params.id}`
  }
})

export default router 