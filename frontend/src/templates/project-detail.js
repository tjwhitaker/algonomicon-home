import React from 'react'

export default ({ data }) => (
  <div>
    <p>{data.project.title}</p>
    <p>{data.project.description}</p>
  </div>
)

export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: {current: {eq: $slug}}) {
      title,
      description
    }
  }
`