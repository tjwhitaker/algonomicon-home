import React from "react"
import styled from "styled-components"

import { graphql } from "gatsby"
import { Layout } from "../components"
import { Helmet } from "react-helmet"

export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      title
      description
    }
  }
`

export default ({ data: { project } }) => (
  <Layout>
    <Helmet>
      <title>{project.title} | Algonomicon</title>
    </Helmet>
    <Project>
      <Title>{project.title}</Title>
      <p>{project.description}</p>
    </Project>
  </Layout>
)

const Title = styled.h1`
  margin-top: 0;
`

const Project = styled.div`
  grid-column: 1 / span 2;
`