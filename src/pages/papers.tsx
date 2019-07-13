import React, { useState } from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Post, Sidebar, Search, Sort, Tags } from "../components"
import { PapersProps } from "../types/content"

export default ({ data }: PapersProps) => {
  const [chunk, setChunk] = useState(3)

  return (
    <Layout>
      <Helmet>
        <title>Papers | Algonomicon</title>
      </Helmet>
      <Main>
        {data.papers.nodes.slice(0, chunk).map((node, i) => (
          <Post key={i}>
            <Link to={`/papers/${node.frontmatter.slug}`}>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.excerpt}</p>
              <small>{node.frontmatter.authors}</small>
            </Link>
          </Post>
        ))}
        {chunk < data.papers.nodes.length && (
          <Button onClick={() => setChunk(chunk + 3)}>Load more...</Button>
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

export const query = graphql`{ ...Papers }`
