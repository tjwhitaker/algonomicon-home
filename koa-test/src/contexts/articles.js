import Router from 'koa-router'
import mongoose from 'mongoose'

//////////////////
// Model Schema //
//////////////////

const Article = mongoose.model('Article', {
  name: String,
  slug: String,
  hero: String,
  description: String,
  content: String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
})

////////////
// Routes //
////////////

const router = new Router()

router.get('/articles', async (ctx, next) => {
  const articles = await Article.find()

  ctx.response.body = {
    status: 'success',
    data: articles
  }
})

router.post('/articles', async (ctx, next) => {
  console.log(ctx.request.body)

  ctx.response.body = {}
})

router.get('/articles/:id', async (ctx, next) => {
  const article = await Article.findById(ctx.params.id)

  ctx.response.body = {
    status: 'success',
    data: article
  }
})

router.put('/articles/:id', async (ctx, next) => {
  const article = await Article.findById(ctx.params.id)

  console.log(ctx.request.body)

  ctx.response.body = {}
})

router.delete('/articles/:id', async (ctx, next) => {
  const article = await Article.findById(ctx.params.id)

  ctx.response.body = {}
})

export default router