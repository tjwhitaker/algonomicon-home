import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Sidebar, Search, Sort, Tags } from "../components"

export default ({ data }) => (
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
          {data.snippets.nodes.map((node, i) => (
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

export const query = graphql`
  {
    snippets: allMarkdownRemark(
      filter: { fields: { collection: { eq: "snippets" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          slug
        }
      }
    }
  }
`
