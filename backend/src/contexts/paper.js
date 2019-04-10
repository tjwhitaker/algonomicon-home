import mongoose from 'mongoose'

const paper = {
  model: mongoose.model('Paper', {
    name: String,
    slug: String,
    author: String,
    abstract: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
  }),
  
  index: async (ctx) => {
    ctx.response.body = await paper.model.find()
  },

  detail: async (ctx) => {
    ctx.response.body = await paper.model.findById(ctx.params.id)
  },

  create: async (ctx) => {
    const paper = new paper.model(ctx.request.body)
    await paper.save()

    ctx.response.body = paper
  },

  update: async (ctx) => {
    ctx.response.body = await paper.model.findByIdAndUpdate(ctx.params.id, ctx.request.body)
  },

  destroy: async (ctx) => {
    await paper.model.findByIdAndRemove(ctx.params.id)

    ctx.response.body = {
      status: `Deleted paper: ${ctx.params.id}`
    }
  }
}

export default paper