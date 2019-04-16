import React from "react"
import Layout from '../components/layout/layout'
import Grid from '../components/layout/grid/grid'
import Main from '../components/layout/grid/main'
import Sidebar from '../components/layout/grid/sidebar'
import Search from '../components/sidebar/search'
import Sort from '../components/sidebar/sort'
import Tags from '../components/sidebar/tags'

export default () => (
  <Layout>
    <Grid>
      <Main>
        Projects
      </Main>
      <Sidebar>
        <Search />
        <Sort />
        <Tags />
      </Sidebar>
    </Grid>
  </Layout>
)
