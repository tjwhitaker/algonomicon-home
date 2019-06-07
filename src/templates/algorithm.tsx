import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Sidebar, Minion } from "../components"
import { AlgorithmQuery } from "../graphql-types"

export const query = graphql`
  query Algorithm($slug: String!) {
    algorithm: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
      }
    }
  }
`

export default (query: { data: AlgorithmQuery }) => (
  <Layout>
    <Helmet>
      <title>{query.data.algorithm.frontmatter.title} | Algonomicon</title>
    </Helmet>
    <Main>
      <Title>{query.data.algorithm.frontmatter.title}</Title>
      {/* <BlockContent blocks={algorithm._rawContent} serializers={serializers} /> */}
    </Main>
    <Sidebar>
      <div>
        <Minion>Meta</Minion>
        <Meta>
          {/* <Field>Created: {algorithm._createdAt}</Field> */}
          {/* <Field>Updated: {algorithm._updatedAt}</Field> */}
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
