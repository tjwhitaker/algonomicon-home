import React from "react"
import styled from 'styled-components'
import Layout from '../components/layout/layout'
import Grid from '../components/layout/grid/grid'
import Main from '../components/layout/grid/main'
import Sidebar from '../components/layout/grid/sidebar'
import Search from '../components/sidebar/search'
import Sort from '../components/sidebar/sort'
import Tags from '../components/sidebar/tags'
import { Link } from 'gatsby'

const Video = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;

  &:first-child {
    padding-top: 0;
  }
`

const Image = styled.img`
  width:100%;
`

const Title = styled.h3`
  color: hsla(0, 0%, 0%, 0.8);
  margin-top: 0;
`

const Description = styled.p`
  color: hsla(0, 0%, 0%, 0.8);
  font-weight:normal;
`

export default ({ data }) => (
  <Layout>
    <Grid>
      <Main>
        <div>
          { data.allSanityVideo.edges.map(({node}) => 
              <Video>
                <Link to={`/videos/${node.slug.current}`}>
                  <Image src={node.heroImage.asset.url} />
                  <Title>{node.title}</Title>
                  <Description>{node.description.substring(0, 300)}...</Description>
                </Link>
              </Video>
          )}
        </div>
      </Main>
      <Sidebar>
        <Search />
        <Sort />
        <Tags />
      </Sidebar>
    </Grid>
  </Layout>
)

export const query = graphql`
  {
    allSanityVideo {
      edges {
        node {
          title,
          slug {
            current
          },
          heroImage {
            asset {
              url
            }
          },
          description
        }
      }
    }
  }
`
