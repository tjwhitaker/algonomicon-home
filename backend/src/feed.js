import Router from 'koa-tree-router'
import mongoose from 'mongoose'

const router = new Router()

router.get('/feed', async (ctx) => {
  let articles = await mongoose.connection.db.collection('articles').find().toArray()
  let datasets = await mongoose.connection.db.collection('datasets').find().toArray()
  let events = await mongoose.connection.db.collection('events').find().toArray()
  let papers = await mongoose.connection.db.collection('paper').find().toArray()
  let projects = await mongoose.connection.db.collection('projects').find().toArray()

  articles.map(article => article.type = 'article')
  datasets.map(dataset => dataset.type = 'dataset')
  events.map(event => event.type = 'event')
  papers.map(paper => paper.type = 'paper')
  projects.map(project => project.type = 'project')

  const items = [...articles, ...datasets, ...events, ...papers, ...projects]
  const sorted = items.sort((a, b) => {return new Date(b.createdAt) - new Date(a.createdAt)})

  ctx.response.body = sorted 
})

export default router