import jwt from 'koa-jwt'
import bcrypt from 'bcrypt'

// const secret = 123456789

// const authorize = async (ctx) => {
//   //email/password?
//   const user = await User.findOne({email: ctx.request.body.email})
//   const match = await bcrypt.compare(ctx.request.body.password, user.password)

//   if (match) {
//     //assign jwt in cookie
//     const payload = {
//       email: user.email,
//       expires: Date.now() + (24 * 60 * 60 * 1000)
//     }

//     jwt.sign(payload, secret)
//   }
//   else {
//     ctx.throw(403, 'Forbidden')
//   }
// }

const authorize = (ctx) => {
  if (ctx.request.header.authorization != process.env.GOD_TOKEN) {
    ctx.throw(403, 'Forbidden')
  }
}

export default authorize