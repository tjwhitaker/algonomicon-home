import Router from 'koa-tree-router'
import mongoose from 'mongoose'
import authorize from '../auth'

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
    const article = new article.model(ctx.request.body)
    await article.save()

    ctx.response.body = article
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

// ////////////
// // Schema //
// ////////////

// const Article = mongoose.model('Article', {
//   name: String,
//   slug: String,
//   hero: String,
//   author: String,
//   description: String,
//   outline: String,
//   content: String,
//   createdAt: {type: Date, default: Date.now},
//   updatedAt: {type: Date, default: Date.now}
// })

// ////////////
// // Routes //
// ////////////

// const router = new Router()

// router.get('/articles', async (ctx) => {
//   const articles = await Article.find()

//   ctx.response.body = articles
// })

// router.post('/articles', async (ctx) => {
//   authorize(ctx)

//   const article = new Article(ctx.request.body)
//   await article.save()

//   ctx.response.body = article
// })

// router.get('/articles/:id', async (ctx) => {
//   const article = await Article.findById(ctx.params.id)

//   ctx.response.body = article
// })

// router.put('/articles/:id', async (ctx) => {
//   authorize(ctx)

//   const article = await Article.findByIdAndUpdate(ctx.params.id, ctx.request.body)

//   ctx.response.body = article
// })

// router.delete('/articles/:id', async (ctx) => {
//   authorize(ctx)
    
//   await Article.findByIdAndRemove(ctx.params.id)

//   ctx.response.body = {
//     status: `Deleted article:${ctx.params.id}`
//   }
// })

// export default router