import React from 'react'

export default ({ data }) => (
  <div>
    <p>{data.video.title}</p>
    <p>{data.video.description}</p>
  </div>
)

export const query = graphql`
  query($slug: String!) {
    video: sanityVideo(slug: {current: {eq: $slug}}) {
      title,
      description
    }
  }
`