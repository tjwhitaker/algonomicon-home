import React, { useState } from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Post, Sidebar, Search, Sort, Tags } from "../components"
import { PapersProps } from "../types/content"

export const query = graphql`
  {
    papers: allMarkdownRemark(
      filter: { fields: { collection: { eq: "papers" } } }
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
export default ({ data }: PapersProps) => {
  const [papers, setPapers] = useState(data.papers.nodes.slice(0, 3))

  return (
    <Layout>
      <Helmet>
        <title>Papers | Algonomicon</title>
      </Helmet>
      <Main>
        {papers.map((node, i) => (
          <Post key={i}>
            <Link to={`/papers/${node.frontmatter.slug}`}>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.excerpt}</p>
              <small>{node.frontmatter.authors}</small>
            </Link>
          </Post>
        ))}
        <Button onClick={() => setPapers(data.papers.nodes)}>
          Load more...
        </Button>
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
