import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Post, Sidebar, Search, Sort, Tags } from "../components"
import { AlgorithmsProps } from "../types/content"

type AlgorithmsProps = {
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

export default ({ data }: AlgorithmsProps) => (
  <Layout>
    <Helmet>
      <title>Algorithms | Algonomicon</title>
    </Helmet>
    <Main>
      {data.algorithms.nodes.map((node, i) => (
        <Post key={i}>
          <Link to={`/algorithms/${node.frontmatter.slug}`}>
            <h3>{node.frontmatter.title}</h3>
            <p>{node.excerpt}</p>
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

export const query = graphql`{ ...Algorithms }`