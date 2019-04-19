import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import Grid from "../components/layout/grid/grid"
import Main from "../components/layout/grid/main"
import Sidebar from "../components/layout/grid/sidebar"
import Search from "../components/sidebar/search"
import Sort from "../components/sidebar/sort"
import Tags from "../components/sidebar/tags"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const LinkRow = styled(Link)`
  display: table-row;
  color: hsla(0, 0%, 0%, 0.8);
  font-weight: normal;

  &:hover {
    color: hsla(0, 0%, 0%, 0.8);
  }
`

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>Datasets | Algonomicon</title>
    </Helmet>
    <Grid>
      <Main>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Format</th>
              <th>Instances</th>
            </tr>
          </thead>
          <tbody>
            {data.datasets.edges.map(({ node }) => (
              <LinkRow to={`/datasets/${node.slug.current}`}>
                <td>{node.title}</td>
                <td>{node.description}</td>
                <td>{node.format}</td>
                <td>{node.instances}</td>
              </LinkRow>
            ))}
          </tbody>
        </table>
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
    datasets: allSanityDataset {
      edges {
        node {
          title
          slug {
            current
          }
          description
          format
          instances
        }
      }
    }
  }
`
