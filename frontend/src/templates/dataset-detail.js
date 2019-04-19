import React from 'react'

export default ({ data }) => (
  <div>
    <p>{data.dataset.title}</p>
    <p>{data.dataset.description}</p>
  </div>
)

export const query = graphql`
  query($slug: String!) {
    dataset: sanityDataset(slug: {current: {eq: $slug}}) {
      title,
      description
    }
  }
`