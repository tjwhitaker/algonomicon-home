import React, { useState } from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Post, Sidebar, Search, Sort, Tags } from "../components"

export default ({ data }) => {
  const [chunk, setChunk] = useState(3)

  return (
    <Layout>
      <Helmet>
        <title>Models | Algonomicon</title>
      </Helmet>
      <Main>
        {data.models.nodes.slice(0, chunk).map((node, i) => (
          <Post key={i}>
            <Link to={`/models/${node.frontmatter.slug}`}>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.excerpt}</p>
            </Link>
          </Post>
        ))}
        {chunk < data.models.nodes.length && (
          <Button onClick={() => setChunk(chunk + 3)}>Load more...</Button>
        )}
        <p>No results.</p>
      </Main>
      <Sidebar>
        <Search />
        <Sort />
        <Tags />
      </Sidebar>
    </Layout>
  )
}

const Button = styled.a`
  display: block;
  margin: 1rem 0;
  cursor: pointer;
`

export const query = graphql`
  {
    models: allMarkdownRemark(
      filter: { fields: { collection: { eq: "models" } } }
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
