import React from 'react'
import { graphql } from 'gatsby'
import SidebarLayout from "../components/layout/sidebar-layout"
import Main from "../components/layout/main"
import Sidebar from "../components/layout/sidebar"
import { Helmet } from 'react-helmet'

export default ({ data }) => (
  <SidebarLayout>
    <Helmet>
      <title>{data.video.title} | Algonomicon</title>
    </Helmet>
    <Main>
      <p>{data.video.title}</p>
      <p>{data.video.description}</p>
    </Main>
    <Sidebar></Sidebar>
  </SidebarLayout>
)


export const query = graphql`
  query($slug: String!) {
    video: sanityVideo(slug: {current: {eq: $slug}}) {
      title,
      description
    }
  }
`