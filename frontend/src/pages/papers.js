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

const Post = styled.div`
  padding: 1rem 0;
  border-bottom:1px solid #ccc;
  
  h3 {
    color: hsla(0, 0%, 0%, 0.8);
    margin-top:0;
  }

  p {
    color: hsla(0, 0%, 0%, 0.8);
    font-weight: normal;
  }

  &:first-child {
    padding-top: 0;
  }
`

export default ({ data }) => (
  <Layout>
    <Grid>
      <Main>
          { data.allSanityPaper.edges.map(({ node }) => 
            <Post>
              <Link to={`/papers/${node.slug.current}`}>
                <h3>{node.title}</h3>
                <p>{node.abstract.substring(0, 300)}...</p>
              </Link>
            </Post>
          )}
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
    allSanityPaper {
      edges {
        node {
          title,
          slug {
            current
          },
          author,
          abstract
        }
      }
    }
  }
`