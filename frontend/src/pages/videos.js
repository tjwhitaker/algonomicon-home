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

export default ({ data: {videos} }) => (
  <SidebarLayout>
    <Helmet>
      <title>Videos | Algonomicon</title>
    </Helmet>
    <Main>
      <div>
        {videos.edges.map(({ node }) => (
          <Video>
            <Link to={`/videos/${node.slug.current}`}>
              <ImageContainer>
                <Image fluid={node.heroImage.asset.fluid} />
                <PlayIcon>
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-play fa-w-14"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" class=""></path></svg>                </PlayIcon>
              </ImageContainer>
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

  &:hover {
    svg {
      color: hsla(0, 100%, 100%, 1);
    }
  }
`

const Title = styled.h3`
  color: hsla(0, 0%, 0%, 0.8);
`

const Description = styled.p`
  color: hsla(0, 0%, 0%, 0.8);
  font-weight: normal;
`

const ImageContainer = styled.div`
  position:relative;
`

const PlayIcon = styled.div`
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:hsla(0, 100%, 100%, 0.8);

  svg {
    width:2rem;
  }
`