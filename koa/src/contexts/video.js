import mongoose from 'mongoose'

const video = {
  model: mongoose.model('Video', {
    name: String,
    slug: String,
    hero: String,
    url: String,
    description: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
  }),

  index: async (ctx) => {
    ctx.response.body = await video.model.find()
  },

  detail: async (ctx) => {
    ctx.response.body = await video.model.findById(ctx.params.id)
  },

  create: async (ctx) => {
    ctx.response.body = await new video.model(ctx.request.body).save()
  },

  update: async (ctx) => {
    ctx.response.body = await video.model.findByIdAndUpdate(ctx.params.id, ctx.request.body)
  },

  destroy: async (ctx) => {
    await video.model.findByIdAndRemove(ctx.params.id)

    ctx.response.body = {
      status: `Deleted video: ${ctx.params.id}`
    }
  }

}

export default video