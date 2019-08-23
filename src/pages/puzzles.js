import React, { useState } from "react"
import styled from "styled-components"
import Fuse from "fuse.js"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Post, Sidebar, Search, Sort, Tags } from "../components"

const handleSearch = (index, query) => {
  const fuse = new Fuse(index, {
    keys: ["excerpt", "frontmatter.title", "frontmatter.authors"],
  })

  return fuse.search(query)
}

export default ({ data }) => {
  const [chunk, setChunk] = useState(5)
  const [puzzles, setPuzzles] = useState(data.puzzles.nodes)

  return (
    <Layout>
      <Helmet>
        <title>Puzzles | Algonomicon</title>
      </Helmet>
      <Main>
        {puzzles.slice(0, chunk).map((node, i) => (
          <Post key={i}>
            <Link to={`/puzzles/${node.frontmatter.slug}`}>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.excerpt}</p>
              <small>{node.frontmatter.authors}</small>
            </Link>
          </Post>
        ))}
        {chunk < puzzles.length && (
          <Button onClick={() => setChunk(chunk + 5)}>Load more...</Button>
        )}
      </Main>
      <Sidebar>
        <Search
          handleChange={e => {
            e.target.value.length === 0
              ? setPuzzles(data.puzzles.nodes)
              : setPuzzles(handleSearch(data.puzzles.nodes, e.target.value))
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
    puzzles: allMarkdownRemark(
      filter: { fields: { collection: { eq: "puzzles" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        frontmatter {
          title
          slug
          authors
        }
      }
    }
  }
`
