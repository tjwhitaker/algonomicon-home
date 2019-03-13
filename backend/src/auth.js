const authorize = (ctx) => {
  console.log(ctx)

  if (ctx.request.header.authorization != process.env.GOD_TOKEN) {
    ctx.throw(403, 'Forbidden')
  }
}

export default authorize 