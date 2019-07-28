import React, { useState } from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Post, Sidebar, Search, Sort, Tags } from "../components"

export default ({ data }) => {
  const [chunk, setChunk] = useState(5)

  return (
    <Layout>
      <Helmet>
        <title>Snippets | Algonomicon</title>
      </Helmet>
      <Main>
        {data.snippets.nodes.slice(0, chunk).map((node, i) => (
          <Post key={i}>
            <Link to={`/snippets/${node.frontmatter.slug}`} key={i}>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.excerpt}</p>
            </Link>
          </Post>
        ))}
        {chunk < data.snippets.nodes.length && (
          <Button onClick={() => setChunk(chunk + 5)}>Load more...</Button>
        )}
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
