import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import SidebarLayout from "../components/layout/sidebar-layout"
import Main from "../components/layout/main"
import Sidebar from "../components/layout/sidebar"
import Search from "../components/sidebar/search"
import Sort from "../components/sidebar/sort"
import Tags from "../components/sidebar/tags"
import Image from "gatsby-image"
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const Feature = styled.div`
  flex: 0 0 100%;
  position: relative;
`

export default ({ data }) => {
  const [head, ...tail] = data.articles.edges

  return (
    <SidebarLayout>
      <Helmet>
        <title>Articles | Algonomicon</title>
      </Helmet>
      <Main>
        <Feature>
          <Link to={`/articles/${head.node.slug.current}`}>
            <div>
              <Image fluid={head.node.heroImage.asset.fluid} />
            </div>
            <div>
              <h3>{head.node.title}</h3>
              <p>{head.node.description.substring(0, 100)}...</p>
            </div>
          </Link>
        </Feature>
        <div>
          {tail.map(({ node }) => (
            <div>
              <Link to={`/articles/${node.slug.current}`}>
                <div>
                  <Image fluid={node.heroImage.asset.fluid} />
                </div>
                <div>
                  <h3>{node.title}</h3>
                  <p>{node.description.substring(0, 100)}...</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Main>
      <Sidebar>
        <Search />
        <Sort />
        <Tags />
      </Sidebar>
    </SidebarLayout>
  )
}

export const query = graphql`
  {
    articles: allSanityArticle {
      edges {
        node {
          title
          slug {
            current
          }
          heroImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          description
        }
      }
    }
  }
`
