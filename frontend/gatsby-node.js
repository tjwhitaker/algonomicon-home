exports.onCreateNode = ({ node }) => {
  console.log(node.internal.type)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createPageDependency } = actions

  const result = await graphql(`
    {
      algorithms: allSanityAlgorithm {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      articles: allSanityArticle {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      papers: allSanityPaper {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      projects: allSanityProject {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      snippets: allSanitySnippet {
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

  const algorithms = result.data.algorithms.edges || []
  const articles = result.data.articles.edges || []
  const papers = result.data.papers.edges || []
  const projects = result.data.projects.edges || []
  const snippets = result.data.snippets.edges || []

  algorithms.forEach((edge, index) => {
    const path = `/algorithms/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/algorithm.js"),
      context: { slug: edge.node.slug.current },
    })

    createPageDependency({ path, nodeId: edge.node.id })
  })

  articles.forEach((edge, index) => {
    const path = `/articles/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/article.js"),
      context: { slug: edge.node.slug.current },
    })

    createPageDependency({ path, nodeId: edge.node.id })
  })

  papers.forEach((edge, index) => {
    const path = `/papers/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/paper.js"),
      context: { slug: edge.node.slug.current },
    })

    createPageDependency({ path, nodeId: edge.node.id })
  })

  projects.forEach((edge, index) => {
    const path = `/projects/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/project.js"),
      context: { slug: edge.node.slug.current },
    })

    createPageDependency({ path, nodeId: edge.node.id })
  })

  snippets.forEach((edge, index) => {
    const path = `/snippets/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/snippet.js"),
      context: { slug: edge.node.slug.current },
    })

    createPageDependency({ path, nodeId: edge.node.id })
  })
}
