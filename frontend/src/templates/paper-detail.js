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
      <title>{data.paper.title} | Algonomicon</title>
    </Helmet>
    <Grid>
      <Main>
        <p>{data.paper.title}</p>
        <p>{data.paper.abstract}</p>
      </Main>
      <Sidebar></Sidebar>
    </Grid>
  </Layout>
)


export const query = graphql`
  query($slug: String!) {
    paper: sanityPaper(slug: {current: {eq: $slug}}) {
      title,
      abstract
    }
  }
`