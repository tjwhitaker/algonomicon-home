import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import styled from "styled-components"
import serializers from "../utils/serializers"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Sidebar, Minion } from "../components"

export const query = graphql`
  query($slug: String!) {
    article: sanityArticle(slug: { current: { eq: $slug } }) {
      title
      description
      author
      _rawOutline
      _rawContent
      _createdAt
      _updatedAt
    }
  }
`

export default ({ data: { article } }) => (
  <Layout>
    <Helmet>
      <title>{article.title} | Algonomicon</title>
    </Helmet>
    <Main>
      <Title>{article.title}</Title>
      <BlockContent blocks={article._rawContent} serializers={serializers} />
    </Main>
    <Sidebar>
      <div>
        <Minion>Meta</Minion>
        <Meta>
          <Field>Author: {article.author}</Field>
          <Field>Created: {article._createdAt}</Field>
          <Field>Updated: {article._updatedAt}</Field>
        </Meta>
      </div>
      <div>
        <Minion>Outline</Minion>
        <Outline>
          <BlockContent blocks={article._rawOutline} />
        </Outline>
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
