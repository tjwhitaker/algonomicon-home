import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Sidebar, Minion } from "../components"
import { ArticleProps } from "../types/content"

export const query = graphql`
  query($slug: String!) {
    article: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        authors
      }
    }
  }
`

export default ({ data }: ArticleProps) => (
  <Layout>
    <Helmet>
      <title>{data.article.frontmatter.title} | Algonomicon</title>
    </Helmet>
    <Main>
      <Title>{data.article.frontmatter.title}</Title>
      <div dangerouslySetInnerHTML={{ __html: data.article.html }} />
    </Main>
    <Sidebar>
      <div>
        <Minion>Meta</Minion>
        <Meta>
          <Field>Author: {data.article.frontmatter.authors}</Field>
          {/* <Field>Created: {article._createdAt}</Field> */}
          {/* <Field>Updated: {article._updatedAt}</Field> */}
        </Meta>
      </div>
      <div>
        <Minion>Outline</Minion>
        <Outline>{/* <BlockContent blocks={article._rawOutline} /> */}</Outline>
      </div>
    </Sidebar>
  </Layout>
)

const Title = styled.h1`
  margin-top: 0;
`

const Meta = styled.div`
  padding: 1rem 0;
`

const Field = styled.p`
  margin: 0;
`

const Outline = styled.div`
  padding: 1rem 0;

  ul {
    list-style: inside;
    margin-left: 0;

    li {
      margin-bottom: 1rem;

      ul {
        list-style: inside circle;
        margin-left: 1.625rem;
        margin-top: 0;

        li {
          margin-bottom: 0;
        }
      }
    }
  }
`
