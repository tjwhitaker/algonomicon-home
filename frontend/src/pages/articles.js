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

export default ({ data: {articles} }) => {
  const [head, ...tail] = articles.edges

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
              <p>{head.node.description.substring(0, 140)}...</p>
            </Content>
          </Link>
        </Feature>
        <Grid>
          {tail.map(({ node }) => (
            <Article>
              <Link to={`/articles/${node.slug.current}`}>
                <div>
                  <Image fluid={node.heroImage.asset.fluid} />
                </div>
                <div>
                  <h4>{node.title}</h4>
                  <p>{node.description.substring(0, 140)}...</p>
                </div>
              </Link>
            </Article>
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
    articles: allSanityArticle(
      sort: {
        fields: [_createdAt]
        order: DESC 
    }) 
    {
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

const Article = styled.div`
  margin:1rem 0;

  h4 {
    color:hsla(0,0%,0%,0.8); 
    margin: 0.5rem 0;
  }

  p {
    color: hsla(0,0%,0%,0.8);
    font-weight:normal;
  }
`