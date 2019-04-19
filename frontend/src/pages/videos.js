import React from "react"
import styled from "styled-components"
import SidebarLayout from "../components/layout/sidebar-layout"
import Main from "../components/layout/main"
import Sidebar from "../components/layout/sidebar"
import Search from "../components/sidebar/search"
import Sort from "../components/sidebar/sort"
import Tags from "../components/sidebar/tags"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

export default ({ data }) => (
  <SidebarLayout>
    <Helmet>
      <title>Videos | Algonomicon</title>
    </Helmet>
    <Main>
      <div>
        {data.videos.edges.map(({ node }) => (
          <Video>
            <Link to={`/videos/${node.slug.current}`}>
              <Image fluid={node.heroImage.asset.fluid} />
              <Title>{node.title}</Title>
              <Description>
                {node.description.substring(0, 300)}...
              </Description>
            </Link>
          </Video>
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

export const query = graphql`
  {
    videos: allSanityVideo {
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

const Video = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;

  &:first-child {
    padding-top: 0;
  }
`

const Title = styled.h3`
  color: hsla(0, 0%, 0%, 0.8);
`

const Description = styled.p`
  color: hsla(0, 0%, 0%, 0.8);
  font-weight: normal;
`
