import Router from 'koa-tree-router'

////////////
// Schema //
////////////

const Dataset = mongoose.model('Article', {
  name: String,
  slug: String,
  description: String,
  content: String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
})

////////////
// Routes //
////////////

const router = new Router()

router.get('/datasets', (ctx) => {})

router.post('/datasets', (ctx) => {})

router.get('/datasets/:id', (ctx) => {})

router.put('/datasets/:id', (ctx) => {})

router.delete('/datasets/:id', (ctx) => {})

export default router 