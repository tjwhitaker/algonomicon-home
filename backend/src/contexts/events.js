import Router from 'koa-tree-router'
import mongoose from 'mongoose'
import authorize from '../auth'

////////////
// Schema //
////////////

const Event = mongoose.model('Event', {
  name: String,
  slug: String,
  url: String,
  location: String,
  date: String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
})

////////////
// Routes //
////////////

const router = new Router()

router.get('/events', async (ctx) => {
  const events = await Event.find()

  ctx.response.body = events
})

router.post('/events', async (ctx) => {
  authorize(ctx)

  const event = new Event(ctx.request.body)
  await event.save()

  ctx.response.body = event
})

router.get('/events/:id', async (ctx) => {
  const event = await Event.findById(ctx.params.id)

  ctx.response.body = event
})

router.put('/events/:id', async (ctx) => {
  authorize(ctx)

  const event = await Event.findByIdAndUpdate(ctx.params.id, ctx.request.body)

  ctx.response.body = event
})

router.delete('/events/:id', async (ctx) => {
  authorize(ctx)

  await Event.findByIdAndRemove(ctx.params.id)

  ctx.response.body = {
    status: `Deleted event:${ctx.params.id}`
  }
})

export default router