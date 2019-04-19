import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout/layout"
import Grid from "../components/layout/grid/grid"
import Main from "../components/layout/grid/main"
import Sidebar from "../components/layout/grid/sidebar"
import { Helmet } from 'react-helmet'

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>{data.dataset.title} | Algonomicon</title>
    </Helmet>
    <Grid>
      <Main>
        <p>{data.dataset.title}</p>
        <p>{data.dataset.description}</p>
      </Main>
      <Sidebar></Sidebar>
    </Grid>
  </Layout>
)


export const query = graphql`
  query($slug: String!) {
    dataset: sanityDataset(slug: {current: {eq: $slug}}) {
      title,
      description
    }
  }
`