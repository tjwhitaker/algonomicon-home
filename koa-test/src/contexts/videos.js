import Router from 'koa-tree-router'
import mongoose from 'mongoose'
import authorize from '../auth'

////////////
// Schema //
////////////

const Video = mongoose.model('Video', {
  name: String,
  slug: String,
  hero: String,
  description: String,
  url: String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
})

////////////
// Routes //
////////////

const router = new Router()

router.get('/videos', async (ctx) => {
  const videos = await Video.find()

  ctx.response.body = videos
})

router.post('/videos', async (ctx) => {
  authorize(ctx)

  const video = new Video(ctx.request.body)
  await video.save()

  ctx.response.body = video
})

router.get('/videos/:id', async (ctx) => {
  const video = await Video.findById(ctx.params.id)

  ctx.response.body = video
})

router.put('/videos/:id', async (ctx) => {
  authorize(ctx)

  const video = await Video.findByIdAndUpdate(ctx.params.id, ctx.request.body)

  ctx.response.body = video
})

router.delete('/videos/:id', async (ctx) => {
  authorize(ctx)

  await Video.findByIdAndRemove(ctx.params.id)

  ctx.response.body = {
    status: `Deleted video:${ctx.params.id}`
  }
})

export default router