import React from "react"
import Layout from "../components/layout/layout"
import Grid from "../components/layout/grid/grid"
import Main from "../components/layout/grid/main"
import Sidebar from "../components/layout/grid/sidebar"
import Search from "../components/sidebar/search"

export default () => (
  <Layout>
    <Grid>
      <Main>About</Main>
      <Sidebar>
        <Search />
      </Sidebar>
    </Grid>
  </Layout>
)
