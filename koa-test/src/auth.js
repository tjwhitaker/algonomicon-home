const validateGod = (ctx) => {
  console.log(ctx)

  if (ctx.request.header.authorization != 'test') {
    ctx.throw(403, 'Forbidden')
  }
}

export default validateGod 