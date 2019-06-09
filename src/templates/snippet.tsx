import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Sidebar, Minion } from "../components"
import { SnippetProps } from "../types/content"

export const query = graphql`
  query($slug: String!) {
    snippet: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`

export default ({ data }: SnippetProps) => (
  <Layout>
    <Helmet>
      <title>{data.snippet.frontmatter.title} | Algonomicon</title>
    </Helmet>
    <Main>
      <Title>{data.snippet.frontmatter.title}</Title>
      <div dangerouslySetInnerHTML={{ __html: data.snippet.html }} />
    </Main>
    <Sidebar>
      <div>
        <Minion>Meta</Minion>
        <Meta>
          <Field>Created: {data.snippet.frontmatter.date}</Field>
        </Meta>
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
