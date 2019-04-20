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
            <Content>
              <h3>{head.node.title}</h3>
              <p>{head.node.description.substring(0, 100)}...</p>
            </Content>
          </Link>
        </Feature>
        <Grid>
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
        </Grid>
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

const Feature = styled.div`
  flex: 0 0 100%;
  position: relative;
`

const Content = styled.div`
  background: hsla(0, 0%, 0%, 0.8);
  position:absolute;
  bottom:1rem;
  left:1rem;
  max-width:60%;
  padding:1rem;

  h3 {
    color: #fff;
    margin-top:0;
  }

  p {
    font-weight:normal;
    color: #eee;
  }
`

const Grid = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`