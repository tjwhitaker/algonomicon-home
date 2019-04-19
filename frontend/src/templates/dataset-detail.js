import React from 'react'

export default ({ data }) => (
  <div>
    <p>{data.sanityDataset.title}</p>
    <p>{data.sanityDataset.description}</p>
  </div>
)

export const query = graphql`
  query($slug: String!) {
    sanityDataset(slug: {current: {eq: $slug}}) {
      title,
      description
    }
  }
`