import React from 'react'
import styled from 'styled-components'
import SidebarLayout from '../components/layout/sidebar-layout'
import Main from '../components/layout/main'
import Sidebar from '../components/layout/sidebar'
import Search from '../components/sidebar/search'
import Sort from '../components/sidebar/sort'
import Tags from '../components/sidebar/tags'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

export const query = graphql`
  {
    snippets: allSanitySnippet {
      edges {
        node {
          title
          slug {
            current
          }
        }
      }
    }
  }
`

export default ({ data: {snippets} }) => (
  <SidebarLayout>
    <Helmet>
      <title>Snippets | Algonomicon</title>
    </Helmet>
    <Main>
      <table>
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          { snippets.edges.map(({node}) => (
            <LinkRow to={`/snippets/${node.slug.current}`}>
              <td>{node.title}</td>
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
  </SidebarLayout>
)

const LinkRow = styled(Link)`
  display:table-row;
  color:hsla(0, 0%, 0%, 0.8);
  font-weight:normal;

  &:hover {
    color: hsla(0, 0%, 0%, 0.8);
  }
`