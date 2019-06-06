import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import { Layout, Main, Sidebar, Search, Sort, Tags } from "../components"

type ArticlesProps = {
  data: {
    articles: {
      edges: {
        node: {
          excerpt: string
          frontmatter: {
            title: string
            slug: string
            date: string
          }
        }
      }[]
    }
  }
}

export default ({ data }: ArticlesProps) => {
  return (
    <Layout>
      <Helmet>
        <title>Articles | Algonomicon</title>
      </Helmet>
      <Main>
        {data.articles.edges.map(({ node }, i) => (
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
}

const Post = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;

  h3 {
    color: hsla(0, 0%, 0%, 0.8);
    margin-top: 0;
  }

  p {
    color: hsla(0, 0%, 0%, 0.8);
    font-weight: normal;
  }

  &:first-child {
    padding-top: 0;
  }
`

export const query = graphql`
  {
    articles: allMarkdownRemark(
      filter: { fields: { collection: { eq: "articles" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date
          }
        }
      }
    }
  }
`
