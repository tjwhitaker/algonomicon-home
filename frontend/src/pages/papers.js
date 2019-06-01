import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Sidebar, Search, Sort, Tags } from "../components"

export const query = graphql`
  {
    papers: allSanityPaper(sort: { fields: [_createdAt], order: DESC }) {
      edges {
        node {
          title
          slug {
            current
          }
          author
          abstract
        }
      }
    }
  }
`

export default ({ data: { papers } }) => (
  <Layout>
    <Helmet>
      <title>Papers | Algonomicon</title>
    </Helmet>
    <Main>
      {papers.edges.map(({ node }, i) => (
        <Post key={i}>
          <Link to={`/papers/${node.slug.current}`}>
            <h3>{node.title}</h3>
            <small>{node.author}</small>
            <p>{node.abstract.substring(0, 300)}...</p>
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
    margin-bottom: 0;
  }

  small {
    color: #aaa;
    line-height: 1.5;
    font-weight: normal;
    display: block;
    margin: 0.5rem 0;
  }

  p {
    color: hsla(0, 0%, 0%, 0.8);
    font-weight: normal;
  }

  &:first-child {
    padding-top: 0;
  }
`
