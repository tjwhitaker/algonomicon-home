import React from "react"
import { Link, graphql } from "gatsby"
import { Layout, Main, Post, Sidebar, Search, Sort, Tags } from "../components"

export default ({ data }) => (
  <Layout>
    <Main>
      {data.allMarkdownRemark.nodes.map((node, i) => (
        <Post key={i}>
          <Link to={`/blog/${node.frontmatter.slug}`}>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
