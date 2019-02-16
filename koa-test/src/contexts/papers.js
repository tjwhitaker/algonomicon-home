import Router from 'koa-tree-router'
import mongoose from 'mongoose'

const Paper = mongoose.model('Paper', {
  name: String,
  slug: String,
  abstract: String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
})

const router = new Router()

router.get('/papers', async (ctx) => {
  const papers = await Paper.find()

  ctx.response.body = papers
})

router.post('/papers', async (ctx) => {
  const paper = new Paper(ctx.request.body)
  await paper.save()

  ctx.response.body = paper
})

router.get('/papers/:id', async (ctx) => {
  const paper = await Paper.findById(ctx.params.id)

  ctx.response.body = paper
})

router.put('/papers/:id', async (ctx) => {
  const paper = await Paper.findByIdAndUpdate(ctx.params.id, ctx.request.body)

  ctx.response.body = paper
})

router.delete('/papers/:id', async (ctx) => {
  await Paper.findByIdAndRemove(ctx.params.id)

  ctx.response.body {
    status: `Deleted paper:${ctx.params.id}`
  }
})

export default router