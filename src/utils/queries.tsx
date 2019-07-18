import { graphql } from "gatsby"

export const queries = graphql`
  fragment About on Query {
    file(relativePath: { eq: "astronaut.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }

  fragment Index on Query {
    file(relativePath: { eq: "inception.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark {
      nodes {
        excerpt
        frontmatter {
          title
          slug
          date
        }
        fields {
          collection
        }
      }
    }
  }

  fragment Algorithms on Query {
    algorithms: allMarkdownRemark(
      filter: { fields: { collection: { eq: "algorithms" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        frontmatter {
          title
          slug
        }
      }
    }
  }

  fragment Algorithm on Query {
    algorithm: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }

  fragment Articles on Query {
    articles: allMarkdownRemark(
      filter: { fields: { collection: { eq: "articles" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        frontmatter {
          title
          slug
          date
        }
      }
    }
  }

  fragment Article on Query {
    article: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        authors
        date
        outline
      }
    }
  }

  fragment Papers on Query {
    papers: allMarkdownRemark(
      filter: { fields: { collection: { eq: "papers" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        frontmatter {
          title
          slug
          authors
        }
      }
    }
  }

  fragment Paper on Query {
    paper: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        authors
        date
        source
      }
    }
  }

  fragment Products on Query {
    file1: file(relativePath: { eq: "placeholder1.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    file2: file(relativePath: { eq: "placeholder2.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    file3: file(relativePath: { eq: "placeholder3.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }

  fragment Snippets on Query {
    snippets: allMarkdownRemark(
      filter: { fields: { collection: { eq: "snippets" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          slug
        }
      }
    }
  }

  fragment Snippet on Query {
    snippet: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
