import React from "react"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import { Layout, Main, Post, Sidebar, Search, Sort, Tags } from "../components"

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>Datasets | Algonomicon</title>
    </Helmet>
    <Main>
      {data.datasets.nodes.map((node, i) => (
        <Post key={i}>
          <Link to={`/datasets/${node.frontmatter.slug}`}>
            <div>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.excerpt}</p>
            </div>
          </Link>
        </Post>
      ))}
    </Main>
    <Sidebar>
      <Search />
      <Sort />
      <Tags />
    </Sidebar>
  </Layout>
)

export const query = graphql`
  {
    datasets: allMarkdownRemark(
      filter: { fields: { collection: { eq: "datasets" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        frontmatter {
          title
          slug
          date
        }
      }
    }
  }
`
