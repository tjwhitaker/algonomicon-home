import React, { useState } from "react"
import styled from "styled-components"
import Fuse from "fuse.js"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import { Layout, Main, Post, Sidebar, Search, Sort, Tags } from "../components"

const handleSearch = (index, query) => {
  const fuse = new Fuse(index, {
    keys: ["excerpt", "frontmatter.title"],
  })

  return fuse.search(query)
}

export default ({ data }) => {
  const [chunk, setChunk] = useState(3)
  const [datasets, setDatasets] = useState(data.datasets.nodes)

  return (
    <Layout>
      <Helmet>
        <title>Datasets | Algonomicon</title>
      </Helmet>
      <Main>
        {datasets.slice(0, chunk).map((node, i) => (
          <Post key={i}>
            <Link to={`/datasets/${node.frontmatter.slug}`}>
              <div>
                <h3>{node.frontmatter.title}</h3>
                <p>{node.excerpt}</p>
              </div>
            </Link>
          </Post>
        ))}
        {chunk < datasets.length && (
          <Button onClick={() => setChunk(chunk + 5)}>Load more...</Button>
        )}
      </Main>
      <Sidebar>
        <Search
          handleChange={e => {
            e.target.value.length === 0
              ? setDatasets(data.datasets.nodes)
              : setDatasets(handleSearch(data.datasets.nodes, e.target.value))
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
    datasets: allMarkdownRemark(
      filter: { fields: { collection: { eq: "datasets" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        frontmatter {
          title
          slug
          date
        }
      }
    }
  }
`
