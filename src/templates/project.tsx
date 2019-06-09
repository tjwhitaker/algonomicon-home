import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Layout } from "../components"
import { Helmet } from "react-helmet"
import { ProjectProps } from "../types/content"

export const query = graphql`
  query($slug: String!) {
    project: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default ({ data }: ProjectProps) => (
  <Layout>
    <Helmet>
      <title>{data.project.frontmatter.title} | Algonomicon</title>
    </Helmet>
    <Project>
      <Title>{data.project.frontmatter.title}</Title>
      <div dangerouslySetInnerHTML={{ __html: data.project.html }} />
    </Project>
  </Layout>
)

const Title = styled.h1`
  margin: 0;
`

const Project = styled.div`
  grid-column: 1 / span 2;
`
