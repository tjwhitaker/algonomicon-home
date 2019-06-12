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
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
      articles: allMarkdownRemark(
        filter: { fields: { collection: { eq: "articles" } } }
      ) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
      papers: allMarkdownRemark(
        filter: { fields: { collection: { eq: "papers" } } }
      ) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
      projects: allMarkdownRemark(
        filter: { fields: { collection: { eq: "projects" } } }
      ) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
      snippets: allMarkdownRemark(
        filter: { fields: { collection: { eq: "snippets" } } }
      ) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  const algorithms = result.data.algorithms.nodes || []
  const articles = result.data.articles.nodes || []
  const papers = result.data.papers.nodes || []
  const projects = result.data.projects.nodes || []
  const snippets = result.data.snippets.nodes || []

  algorithms.forEach(node => {
    const path = `/algorithms/${node.frontmatter.slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/algorithm.tsx"),
      context: { slug: node.frontmatter.slug },
    })

    //createPageDependency({ path, nodeId: node.id })
  })

  articles.forEach(node => {
    const path = `/articles/${node.frontmatter.slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/article.tsx"),
      context: { slug: node.frontmatter.slug },
    })

    //createPageDependency({ path, nodeId: node.id })
  })

  papers.forEach(node => {
    const path = `/papers/${node.frontmatter.slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/paper.tsx"),
      context: { slug: node.frontmatter.slug },
    })

    //createPageDependency({ path, nodeId: node.id })
  })

  projects.forEach(node => {
    const path = `/projects/${node.frontmatter.slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/project.tsx"),
      context: { slug: node.frontmatter.slug },
    })

    //createPageDependency({ path, nodeId: node.id })
  })

  snippets.forEach(node => {
    const path = `/snippets/${node.frontmatter.slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/snippet.tsx"),
      context: { slug: node.frontmatter.slug },
    })

    //createPageDependency({ path, nodeId: node.id })
  })
}
