import React from "react"
import styled from 'styled-components'
import Layout from '../components/layout/layout'
import Grid from '../components/layout/grid/grid'
import Main from '../components/layout/grid/main'
import Sidebar from '../components/layout/grid/sidebar'
import Search from '../components/sidebar/search'
import Sort from '../components/sidebar/sort'
import Tags from '../components/sidebar/tags'

const Feature = styled.div`
  flex: 0 0 100%;
  position: relative;
`

export default ({ data }) => {
  const [head, ...tail] = data.allSanityArticle.edges
  
  return (
    <Layout>
      <Grid>
        <Main>
          <Feature>{head.node.title}</Feature>
          <div>
            { tail.map(({ node }) => 
              <div>{ node.title }</div>
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
}

export const query = graphql`
  {
    allSanityArticle {
      edges {
        node {
          title
        }
      }
    }
  }
`