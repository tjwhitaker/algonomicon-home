import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Sidebar, Search, Sort, Tags } from "../components"

export type AlgorithmProps = {
  data: {
    algorithms: {
      edges: {
        node: {
          excerpt: string
          frontmatter: {
            title: string
            slug: string
          }
        }
      }[]
    }
  }
}

export default ({ data }: AlgorithmProps) => (
  <Layout>
    <Helmet>
      <title>Algorithms | Algonomicon</title>
    </Helmet>
    <Main>
      {data.algorithms.edges.map(({ node }, i: number) => (
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

const Post = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;

  h3 {
    color: hsla(0, 0%, 0%, 0.8);
    margin-top: 0;
  }

  p {
    color: hsla(0, 0%, 0%, 0.8);
    font-weight: normal;
  }

  &:first-child {
    padding-top: 0;
  }
`

export const query = graphql`
  {
    algorithms: allMarkdownRemark(
      filter: { fields: { collection: { eq: "algorithms" } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`
