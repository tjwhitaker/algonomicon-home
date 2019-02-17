import Router from 'koa-tree-router'
import mongoose from 'mongoose'
import validateGod from '../auth'

////////////
// Schema //
////////////

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

router.get('/articles', async (ctx) => {
  const articles = await Article.find()

  ctx.response.body = articles
})

router.post('/articles', async (ctx) => {
  validateGod(ctx)

  const article = new Article(ctx.request.body)
  await article.save()

  ctx.response.body = article
})

router.get('/articles/:id', async (ctx) => {
  const article = await Article.findById(ctx.params.id)

  ctx.response.body = article
})

router.put('/articles/:id', async (ctx) => {
  validateGod(ctx)

  const article = await Article.findByIdAndUpdate(ctx.params.id, ctx.request.body)

  ctx.response.body = article
})

router.delete('/articles/:id', async (ctx) => {
  validateGod(ctx)
    
  await Article.findByIdAndRemove(ctx.params.id)

  ctx.response.body = {
    status: `Deleted article:${ctx.params.id}`
  }
})

export default router