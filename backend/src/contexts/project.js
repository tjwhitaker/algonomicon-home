import mongoose from 'mongoose'

const project = {
  model: mongoose.model('Project', {
    name: String,
    slug: String,
    hero: String,
    description: String,
    content: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
  }),

  index: async (ctx) => {
    ctx.response.body = await project.model.find()
  },

  detail: async (ctx) => {
    ctx.response.body = await project.model.findById(ctx.params.id)
  },

  create: async (ctx) => {
    const project = new project.model(ctx.request.body)
    await project.save()

    ctx.response.body = project
  },

  update: async (ctx) => {
    ctx.response.body = await project.model.findByIdAndUpdate(ctx.params.id, ctx.request.body)
  },

  destroy: async (ctx) => {
    await project.model.findByIdAndRemove(ctx.params.id)

    ctx.response.body = {
      status: `Deleted project: ${ctx.params.id}`
    }
  }
}

export default project