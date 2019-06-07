import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Sidebar, Minion } from "../components"

// export const query = graphql`
//   query($slug: String!) {
//     snippet: sanitySnippet(slug: { current: { eq: $slug } }) {
//       title
//       _rawContent
//       _createdAt
//       _updatedAt
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    snippet: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default ({ data: { snippet } }) => (
  <Layout>
    <Helmet>
      <title>{snippet.frontmatter.title} | Algonomicon</title>
    </Helmet>
    <Main>
      <Title>{snippet.frontmatter.title}</Title>
      {/* <BlockContent blocks={snippet._rawContent} serializers={serializers} /> */}
      <div dangerouslySetInnerHTML={{ __html: snippet.html }} />
    </Main>
    <Sidebar>
      <div>
        <Minion>Meta</Minion>
        <Meta>
          {/* <Field>Created: {snippet._createdAt}</Field> */}
          {/* <Field>Updated: {snippet._updatedAt}</Field> */}
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
