import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Sidebar, Minion } from "../components"
import { PaperProps } from "../types/content"

export const query = graphql`
  query($slug: String!) {
    paper: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        authors
      }
    }
  }
`

export default ({ data }: PaperProps) => (
  <Layout>
    <Helmet>
      <title>{data.paper.frontmatter.title} | Algonomicon</title>
    </Helmet>
    <Main>
      <Title>{data.paper.frontmatter.title}</Title>
      {/* <BlockContent blocks={paper._rawContent} serializers={serializers} /> */}
    </Main>
    <Sidebar>
      <div>
        <Minion>Meta</Minion>
        <Meta>
          {/* <Field>Author: {paper.author}</Field> */}
          <Field>
            {/* Source: <Link to={paper.source}>{paper.source}</Link> */}
          </Field>
          {/* <Field>Created: {paper._createdAt}</Field> */}
          {/* <Field>Updated: {paper._updatedAt}</Field> */}
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
