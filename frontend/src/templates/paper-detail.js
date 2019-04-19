import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => (
  <div>
    <p>{data.paper.title}</p>
    <p>{data.paper.abstract}</p>
  </div>
)

export const query = graphql`
  query($slug: String!) {
    paper: sanityPaper(slug: {current: {eq: $slug}}) {
      title,
      abstract
    }
  }
`