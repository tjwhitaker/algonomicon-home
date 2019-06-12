import { ImageProps } from "./images"
import { FeedProps } from "./components"

export type IndexProps = {
  data: {
    file: {
      childImageSharp: ImageProps
    }
    allMarkdownRemark: FeedProps
  }
}

export type AboutProps = {
  data: {
    file: {
      childImageSharp: ImageProps
    }
  }
}
