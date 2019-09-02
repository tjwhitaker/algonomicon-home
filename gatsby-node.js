exports.onCreateNode = ({ node }) => {
  console.log(node.internal.type)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createPageDependency } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  const posts = result.data.allMarkdownRemark.nodes || []

  posts.forEach(node => {
    const path = `/blog/${node.frontmatter.slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/algorithm.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
}
