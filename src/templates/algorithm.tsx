import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Sidebar, Minion } from "../components"
import { AlgorithmProps } from "../types/content"

export const query = graphql`
  query Algorithm($slug: String!) {
    algorithm: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`

export default ({ data }: AlgorithmProps) => (
  <Layout>
    <Helmet>
      <title>{data.algorithm.frontmatter.title} | Algonomicon</title>
    </Helmet>
    <Main>
      <Title>{data.algorithm.frontmatter.title}</Title>
      <div dangerouslySetInnerHTML={{ __html: data.algorithm.html }} />
    </Main>
    <Sidebar>
      <div>
        <Minion>Meta</Minion>
        <Meta>
          <Field>Created: {data.algorithm.frontmatter.date}</Field>
        </Meta>
      </div>
    </Sidebar>
  </Layout>
)

const Title = styled.h1`
  margin: 0;
`

const Meta = styled.div`
  padding: 1rem 0;
`

const Field = styled.p`
  margin: 0;
`
