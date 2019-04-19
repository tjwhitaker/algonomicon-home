import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => (
  <div>
    <p>{data.article.title}</p>
    <p>{data.article.description}</p>
  </div>
)

export const query = graphql`
  query($slug: String!) {
    article: sanityArticle(slug: {current: {eq: $slug}}) {
      title,
      description
    }
  }
`