import React from 'react'
import { graphql } from 'gatsby'
import SidebarLayout from "../components/layout/sidebar-layout"
import Main from "../components/layout/main"
import Sidebar from "../components/layout/sidebar"
import { Helmet } from 'react-helmet'

export default ({ data }) => (
  <SidebarLayout>
    <Helmet>
      <title>{data.dataset.title} | Algonomicon</title>
    </Helmet>
    <Main>
      <p>{data.dataset.title}</p>
      <p>{data.dataset.description}</p>
    </Main>
    <Sidebar></Sidebar>
  </SidebarLayout>
)


export const query = graphql`
  query($slug: String!) {
    dataset: sanityDataset(slug: {current: {eq: $slug}}) {
      title,
      description
    }
  }
`