import React from "react"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import { Layout, Main, Post, Sidebar, Search, Sort, Tags } from "../components"

type Props = {
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

export default ({ data }: Props) => (
  <Layout>
    <Helmet>
      <title>Articles | Algonomicon</title>
    </Helmet>
    <Main>
      {data.articles.nodes.map((node, i) => (
        <Post key={i}>
          <Link to={`/articles/${node.frontmatter.slug}`}>
            <div>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.excerpt}</p>
            </div>
          </Link>
        </Post>
      ))}
    </Main>
    <Sidebar>
      <Search />
      <Sort />
      <Tags />
    </Sidebar>
  </Layout>
)

export const query = graphql`{ ...Articles }`
