export type AlgorithmsProps = {
  data: {
    algorithms: {
      nodes: {
        excerpt: string
        frontmatter: {
          title: string
          slug: string
        }
      }[]
    }
  }
}

export type AlgorithmProps = {}
