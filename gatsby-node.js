exports.onCreateNode = ({ node }) => {
  console.log(node.internal.type)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createPageDependency } = actions

  const result = await graphql(`
    {
      algorithms: allMarkdownRemark(
        filter: { fields: { collection: { eq: "algorithms" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      articles: allMarkdownRemark(
        filter: { fields: { collection: { eq: "articles" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      papers: allMarkdownRemark(
        filter: { fields: { collection: { eq: "papers" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      projects: allMarkdownRemark(
        filter: { fields: { collection: { eq: "projects" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      snippets: allMarkdownRemark(
        filter: { fields: { collection: { eq: "snippets" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  const algorithms = result.data.algorithms.edges || []
  const articles = result.data.articles.edges || []
  const papers = result.data.papers.edges || []
  const projects = result.data.projects.edges || []
  const snippets = result.data.snippets.edges || []

  algorithms.forEach((edge, index) => {
    const path = `/algorithms/${edge.node.frontmatter.slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/algorithm.js"),
      context: { slug: edge.node.frontmatter.slug },
    })

    createPageDependency({ path, nodeId: edge.node.id })
  })

  articles.forEach((edge, index) => {
    const path = `/articles/${edge.node.frontmatter.slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/article.js"),
      context: { slug: edge.node.frontmatter.slug },
    })

    createPageDependency({ path, nodeId: edge.node.id })
  })

  papers.forEach((edge, index) => {
    const path = `/papers/${edge.node.frontmatter.slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/paper.js"),
      context: { slug: edge.node.frontmatter.slug },
    })

    createPageDependency({ path, nodeId: edge.node.id })
  })

  projects.forEach((edge, index) => {
    const path = `/projects/${edge.node.frontmatter.slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/project.js"),
      context: { slug: edge.node.frontmatter.slug },
    })

    createPageDependency({ path, nodeId: edge.node.id })
  })

  snippets.forEach((edge, index) => {
    const path = `/snippets/${edge.node.frontmatter.slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/snippet.js"),
      context: { slug: edge.node.frontmatter.slug },
    })

    createPageDependency({ path, nodeId: edge.node.id })
  })
}
