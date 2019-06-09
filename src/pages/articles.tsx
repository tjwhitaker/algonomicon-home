import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import { Layout, Main, Post, Sidebar, Search, Sort, Tags } from "../components"
import { ArticlesProps } from "../types/content"

export const query = graphql`
  {
    articles: allMarkdownRemark(
      filter: { fields: { collection: { eq: "articles" } } }
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

export default ({ data }: ArticlesProps) => (
  <Layout>
    <Helmet>
      <title>Articles | Algonomicon</title>
    </Helmet>
    <Main>
      {data.articles.nodes.map((node, i) => (
        <Post key={i}>
          <Link to={`/articles/${node.frontmatter.slug}`}>
            <div>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.excerpt}</p>
            </div>
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
