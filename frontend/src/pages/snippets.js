import React from 'react'
import SidebarLayout from '../components/layout/sidebar-layout'

export default ({ data }) => (
  <SidebarLayout></SidebarLayout>
)

export const query = graphql`
  {
    allSanitySnippet {
      edges {
        node {
          title
        }
      }
    }
  }
`