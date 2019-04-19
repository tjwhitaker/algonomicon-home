exports.onCreateNode = ({ node }) => {
  console.log(node.internal.type)
}


exports.createPages = async({graphql, actions}) => {
  const { createPage, createPageDependency } = actions

  const result = await graphql(`
    {
      articles: allSanityArticle(filter: {slug: {current: {ne: null}}}) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      datasets: allSanityDataset(filter: {slug: {current: {ne: null}}}) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const articles = result.data.articles.edges || []
  const datasets = result.data.datasets.edges || []

  articles.forEach((edge, index) => {
    const path = `/articles/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve('./src/templates/article-detail.js'),
      context: {slug: edge.node.slug.current}
    })

    createPageDependency({path, nodeId: edge.node.id})
  })

  datasets.forEach((edge, index) => {
    const path = `/datasets/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve('./src/templates/dataset-detail.js'),
      context: {slug: edge.node.slug.current}
    })

    createPageDependency({path, nodeId: edge.node.id})
  })
}