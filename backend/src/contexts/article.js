import mongoose from 'mongoose'

const article = {
  model: mongoose.model('Article', {
    name: String,
    slug: String,
    hero: String,
    author: String,
    description: String,
    outline: String,
    content: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
  }),

  index: async (ctx) => {
    ctx.response.body = await article.model.find()
  },

  detail: async (ctx) => {
    ctx.response.body = await article.model.findById(ctx.params.id)
  },

  create: async (ctx) => {
    ctx.response.body = await new article.model(ctx.request.body).save()
  },

  update: async (ctx) => {
    ctx.response.body = await article.model.findByIdAndUpdate(ctx.params.id, ctx.request.body)
  },

  destroy: async (ctx) => {
    await article.model.findByIdAndRemove(ctx.params.id)

    ctx.response.body = {
      status: `Deleted article: ${ctx.params.id}`
    }
  }
}

export default article