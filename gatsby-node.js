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
            id
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
            id
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
            id
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
            id
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
            id
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

  algorithms.forEach(edge => {
    const path = `/algorithms/${edge.node.frontmatter.slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/algorithm.tsx"),
      context: { slug: edge.node.frontmatter.slug },
    })

    createPageDependency({ path, nodeId: edge.node.id })
  })

  articles.forEach(edge => {
    const path = `/articles/${edge.node.frontmatter.slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/article.tsx"),
      context: { slug: edge.node.frontmatter.slug },
    })

    createPageDependency({ path, nodeId: edge.node.id })
  })

  papers.forEach(edge => {
    const path = `/papers/${edge.node.frontmatter.slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/paper.tsx"),
      context: { slug: edge.node.frontmatter.slug },
    })

    createPageDependency({ path, nodeId: edge.node.id })
  })

  projects.forEach(edge => {
    const path = `/projects/${edge.node.frontmatter.slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/project.tsx"),
      context: { slug: edge.node.frontmatter.slug },
    })

    createPageDependency({ path, nodeId: edge.node.id })
  })

  snippets.forEach(edge => {
    const path = `/snippets/${edge.node.frontmatter.slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/snippet.tsx"),
      context: { slug: edge.node.frontmatter.slug },
    })

    createPageDependency({ path, nodeId: edge.node.id })
  })
}
