import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout/layout"
import Grid from "../components/layout/grid/grid"
import Main from "../components/layout/grid/main"
import Sidebar from "../components/layout/grid/sidebar"

export default ({ data }) => (
  <Layout>
    <Grid>
      <Main>
        <p>{data.article.title}</p>
        <p>{data.article.description}</p>
      </Main>
      <Sidebar></Sidebar>
    </Grid>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    article: sanityArticle(slug: {current: {eq: $slug}}) {
      title,
      description
    }
  }
`