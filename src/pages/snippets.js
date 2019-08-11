import React, { useState } from "react"
import styled from "styled-components"
import Fuse from "fuse.js"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Post, Sidebar, Search, Sort, Tags } from "../components"

const handleSearch = (index, query) => {
  const options = {
    keys: ["excerpt", "frontmatter.title"],
  }

  const fuse = new Fuse(index, options)

  return fuse.search(query)
}

export default ({ data }) => {
  const [chunk, setChunk] = useState(5)
  const [snippets, setSnippets] = useState(data.snippets.nodes)

  return (
    <Layout>
      <Helmet>
        <title>Snippets | Algonomicon</title>
      </Helmet>
      <Main>
        {snippets.slice(0, chunk).map((node, i) => (
          <Post key={i}>
            <Link to={`/snippets/${node.frontmatter.slug}`} key={i}>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.excerpt}</p>
            </Link>
          </Post>
        ))}
        {chunk < snippets.length && (
          <Button onClick={() => setChunk(chunk + 5)}>Load more...</Button>
        )}
      </Main>
      <Sidebar>
        <Search
          handleChange={e => {
            e.target.value.length === 0
              ? setSnippets(data.snippets.nodes)
              : setSnippets(handleSearch(data.snippets.nodes, e.target.value))
          }}
        />
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
