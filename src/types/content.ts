import { string } from "prop-types"

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

export type AlgorithmProps = {
  data: {
    algorithm: {
      html: string
      frontmatter: {
        title: string
        date: string
      }
    }
  }
}

export type ArticlesProps = {
  data: {
    articles: {
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

export type ArticleProps = {
  data: {
    article: {
      html: string
      // tableOfContents: string
      frontmatter: {
        title: string
        authors: string
        date: string
      }
    }
  }
}

export type PapersProps = {
  data: {
    papers: {
      nodes: {
        excerpt: string
        frontmatter: {
          title: string
          slug: string
          authors: string
        }
      }[]
    }
  }
}

export type PaperProps = {
  data: {
    paper: {
      html: string
      frontmatter: {
        title: string
        authors: string
        date: string
      }
    }
  }
}

export type ProjectsProps = {
  data: {
    projects: {
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

export type ProjectProps = {
  data: {
    project: {
      html: string
      frontmatter: {
        title: string
      }
    }
  }
}

export type SnippetsProps = {
  data: {
    snippets: {
      nodes: {
        frontmatter: {
          title: string
          slug: string
        }
      }[]
    }
  }
}

export type SnippetProps = {
  data: {
    snippet: {
      html: string
      frontmatter: {
        title: string
        date: string
      }
    }
  }
}
