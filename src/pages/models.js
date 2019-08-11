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
  const [chunk, setChunk] = useState(3)
  const [models, setModels] = useState(data.models.nodes)

  return (
    <Layout>
      <Helmet>
        <title>Models | Algonomicon</title>
      </Helmet>
      <Main>
        {models.slice(0, chunk).map((node, i) => (
          <Post key={i}>
            <Link to={`/models/${node.frontmatter.slug}`}>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.excerpt}</p>
            </Link>
          </Post>
        ))}
        {chunk < models.length && (
          <Button onClick={() => setChunk(chunk + 3)}>Load more...</Button>
        )}
        <p>No results.</p>
      </Main>
      <Sidebar>
        <Search
          handleChange={e => {
            e.target.value.length === 0
              ? setModels(data.models.nodes)
              : setModels(handleSearch(data.models.nodes, e.target.value))
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
