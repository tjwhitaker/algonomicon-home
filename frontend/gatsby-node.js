exports.onCreateNode = ({ node }) => {
  console.log(node.internal.type)
}


exports.createPages = async({graphql, actions}) => {
  const { createPage, createPageDependency } = actions

  const result = await graphql(`
    {
      allSanityArticle(filter: {slug: {current: {ne: null}}}) {
        edges {
          node {
            title,
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const articles = result.data.allSanityArticle.edges || []

  articles.forEach((edge, index) => {
    const path = `/articles/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve('./src/templates/article-detail.js'),
      context: {slug: edge.node.slug.current}
    })

    createPageDependency({path, nodeId: edge.node.id})
  })
}