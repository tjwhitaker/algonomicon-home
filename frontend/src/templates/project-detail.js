import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout/layout"
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

export default ({ data: {project} }) => (
  <Layout>
    <Helmet>
      <title>{project.title} | Algonomicon</title>
    </Helmet>
    <Title>{project.title}</Title>
    <p>{project.description}</p>
  </Layout>
)


export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: {current: {eq: $slug}}) {
      title,
      description
    }
  }
`

const Title = styled.h1`
  margin-top: 0;
`