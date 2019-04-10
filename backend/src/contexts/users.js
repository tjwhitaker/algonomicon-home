import Router from 'koa-tree-router'
import mongoose from 'mongoose'

const User = mongoose.model('User', {
  email: String,
  password: String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
})

const router = new Router()

router.get('/login', (ctx) => {

})

export default router