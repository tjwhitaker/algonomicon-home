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
      datasets: allMarkdownRemark(
        filter: { fields: { collection: { eq: "datasets" } } }
      ) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
      models: allMarkdownRemark(
        filter: { fields: { collection: { eq: "models" } } }
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
      thoughts: allMarkdownRemark(
        filter: { fields: { collection: { eq: "thoughts" } } }
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
  const datasets = result.data.datasets.nodes || []
  const models = result.data.models.nodes || []
  const papers = result.data.papers.nodes || []
  const snippets = result.data.snippets.nodes || []
  const thoughts = result.data.thoughts.nodes || []

  algorithms.forEach(node => {
    const path = `/algorithms/${node.frontmatter.slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/algorithm.js"),
      context: { slug: node.frontmatter.slug },
    })
  })

  datasets.forEach(node => {
    const path = `/datasets/${node.frontmatter.slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/dataset.js"),
      context: { slug: node.frontmatter.slug },
    })
  })

  models.forEach(node => {
    const path = `/models/${node.frontmatter.slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/model.js"),
      context: { slug: node.frontmatter.slug },
    })
  })

  papers.forEach(node => {
    const path = `/papers/${node.frontmatter.slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/paper.js"),
      context: { slug: node.frontmatter.slug },
    })
  })

  snippets.forEach(node => {
    const path = `/snippets/${node.frontmatter.slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/snippet.js"),
      context: { slug: node.frontmatter.slug },
    })
  })

  thoughts.forEach(node => {
    const path = `/thoughts/${node.frontmatter.slug}`

    createPage({
      path,
      component: require.resolve("./src/templates/thought.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
}
