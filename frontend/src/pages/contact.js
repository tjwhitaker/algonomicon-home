import React from "react"
import Layout from "../components/layout/layout"
import Grid from "../components/layout/grid/grid"
import Main from "../components/layout/grid/main"
import Sidebar from "../components/layout/grid/sidebar"
import Search from "../components/sidebar/search"
import { Helmet } from 'react-helmet'

export default () => (
  <Layout>
    <Helmet>
      <title>Contact | Algonomicon</title>
    </Helmet>
    <Grid>
      <Main>Contact</Main>
      <Sidebar>
        <Search />
      </Sidebar>
    </Grid>
  </Layout>
)
