import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Post, Sidebar, Search, Sort, Tags } from "../components"
import { AlgorithmsProps } from "../types/content"

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

export default ({ data }: AlgorithmsProps) => (
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
