import Router from 'koa-tree-router'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const user = {
  model: mongoose.model('User', {
    email: String,
    password: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
  }),

  login: async (ctx) => {
    const u = await user.model.findOne({ email: ctx.request.body.email })
    const match = await bcrypt.compare(ctx.request.body.password, u.password)

    if (match) {
      //assign jwt to cookie
      const payload = {
        email: u.email,
        expires: Date.now() + (24 * 60 * 60 * 1000)
      }

      ctx.response.body = {
        token: jwt.sign(payload, process.env.SECRET)
      }
    }
    else {
      ctx.throw(401, 'Unauthorized')
    }
  },

  register: async (ctx) => {
    const email = ctx.request.body.email
    const password = ctx.request.body.password
    const hash = await bcrypt.hash(password, 10)
    const u = new user.model({email: email, password: hash})

    await u.save()

    ctx.response.body = u
  }
}

export default user