import mongoose from 'mongoose'

const dataset = {
  model: mongoose.model('Dataset', {
    name: String,
    slug: String,
    creator: String,
    instances: String,
    format: String,
    description: String,
    content: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
  }),

  index: async (ctx) => {
    ctx.response.body = await dataset.model.find()
  },

  detail: async (ctx) => {
    ctx.response.body = await dataset.model.findById(ctx.params.id)
  },

  create: async (ctx) => {
    ctx.response.body = await new dataset.model(ctx.request.body).save()
  },

  update: async (ctx) => {
    ctx.response.body = await dataset.model.findByIdAndUpdate(ctx.params.id, ctx.request.body)
  },

  destroy: async (ctx) => {
    await dataset.model.findByIdAndRemove(ctx.params.id)

    ctx.response.body = {
      status: `Deleted dataset: ${ctx.params.id}`
    }
  }
}

export default dataset