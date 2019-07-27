import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Post, Sidebar, Search, Sort, Tags } from "../components"

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>Snippets | Algonomicon</title>
    </Helmet>
    <Main>
      {data.snippets.nodes.map((node, i) => (
        <Post key={i}>
          <Link to={`/snippets/${node.frontmatter.slug}`} key={i}>
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
    snippets: allMarkdownRemark(
      filter: { fields: { collection: { eq: "snippets" } } }
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
