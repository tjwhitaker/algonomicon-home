import React from "react"
import styled from "styled-components"
import BlockContent from "@sanity/block-content-to-react"
import serializers from "../utils/serializers"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Sidebar, Minion } from "../components"

// export const query = graphql`
//   query($slug: String!) {
//     paper: sanityPaper(slug: { current: { eq: $slug } }) {
//       title
//       author
//       source
//       _rawContent
//       _createdAt
//       _updatedAt
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    paper: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        authors
      }
    }
  }
`

export default ({ data: { paper } }) => (
  <Layout>
    <Helmet>
      <title>{paper.frontmatter.title} | Algonomicon</title>
    </Helmet>
    <Main>
      <Title>{paper.frontmatter.title}</Title>
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
