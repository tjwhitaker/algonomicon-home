import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Sidebar, Search, Sort, Tags } from "../components"
import { SnippetsQuery } from "../graphql-types"

export const query = graphql`
  query Snippets {
    snippets: allMarkdownRemark(
      filter: { fields: { collection: { eq: "snippets" } } }
    ) {
      nodes {
        excerpt
        frontmatter {
          title
          slug
        }
      }
    }
  }
`

export default (query: { data: SnippetsQuery }) => (
  <Layout>
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
          {query.data.snippets.nodes.map((node, i) => (
            <LinkRow to={`/snippets/${node.frontmatter.slug}`} key={i}>
              <td>{node.frontmatter.title}</td>
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
