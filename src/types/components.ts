export type FeedProps = {
  data: {
    allMarkdownRemark: {
      nodes: {
        excerpt: string
        frontmatter: {
          title: string
          slug: string
          date: string
        }
        fields: {
          collection: string
        }
      }[]
    }
  }
}

export type FeedItemProps = {
  data: {
    excerpt: string
    frontmatter: {
      title: string
      slug: string
      date: string
    }
    fields: {
      collection: string
    }
  }
}
