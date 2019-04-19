import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout/layout"
import { Helmet } from 'react-helmet'

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>{data.project.title} | Algonomicon</title>
    </Helmet>
    <p>{data.project.title}</p>
    <p>{data.project.description}</p>
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