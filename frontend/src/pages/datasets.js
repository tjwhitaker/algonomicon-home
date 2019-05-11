import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Sidebar, Search, Sort, Tags } from "../components"

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

export default ({ data: { datasets } }) => (
  <Layout>
    <Helmet>
      <title>Datasets | Algonomicon</title>
    </Helmet>
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
          {datasets.edges.map(({ node }, i) => (
            <LinkRow to={`/datasets/${node.slug.current}`} key={i}>
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
  </Layout>
)

const LinkRow = styled(Link)`
  display: table-row;
  color: hsla(0, 0%, 0%, 0.8);
  font-weight: normal;

  &:hover {
    color: hsla(0, 0%, 0%, 0.8);
  }
`
