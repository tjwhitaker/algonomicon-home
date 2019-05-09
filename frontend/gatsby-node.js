exports.onCreateNode = ({ node }) => {
  console.log(node.internal.type)
}


exports.createPages = async({graphql, actions}) => {
  const { createPage, createPageDependency } = actions

  const result = await graphql(`
    {
      articles: allSanityArticle {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      datasets: allSanityDataset {
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

  const articles = result.data.articles.edges || []
  const datasets = result.data.datasets.edges || []
  const papers = result.data.papers.edges || []
  const projects = result.data.projects.edges || []
  const snippets = result.data.snippets.edges || []

  articles.forEach((edge, index) => {
    const path = `/articles/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve('./src/templates/article.js'),
      context: {slug: edge.node.slug.current}
    })

    createPageDependency({path, nodeId: edge.node.id})
  })

  datasets.forEach((edge, index) => {
    const path = `/datasets/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve('./src/templates/dataset.js'),
      context: {slug: edge.node.slug.current}
    })

    createPageDependency({path, nodeId: edge.node.id})
  })

  papers.forEach((edge, index) => {
    const path = `/papers/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve('./src/templates/paper.js'),
      context: {slug: edge.node.slug.current}
    })

    createPageDependency({path, nodeId: edge.node.id})
  })

  projects.forEach((edge, index) => {
    const path = `/projects/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve('./src/templates/project.js'),
      context: {slug: edge.node.slug.current}
    })

    createPageDependency({path, nodeId: edge.node.id})
  })

  snippets.forEach((edge, index) => {
    const path = `/snippets/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve('./src/templates/snippet.js'),
      context: {slug: edge.node.slug.current}
    })

    createPageDependency({path, nodeId: edge.node.id})
  })
}