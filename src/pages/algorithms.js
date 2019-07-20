import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Post, Sidebar, Search, Sort, Tags } from "../components"

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>Algorithms | Algonomicon</title>
    </Helmet>
    <Main>
      {data.algorithms.nodes.map((node, i) => (
        <Post key={i}>
          <Link to={`/algorithms/${node.frontmatter.slug}`}>
            <h3>{node.frontmatter.title}</h3>
            <p>{node.excerpt}</p>
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
    algorithms: allMarkdownRemark(
      filter: { fields: { collection: { eq: "algorithms" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        frontmatter {
          title
          slug
        }
      }
    }
  }
`
