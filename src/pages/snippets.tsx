import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Sidebar, Search, Sort, Tags } from "../components"

// export const query = graphql`
//   {
//     snippets: allSanitySnippet(sort: { fields: [_createdAt], order: DESC }) {
//       edges {
//         node {
//           title
//           slug {
//             current
//           }
//         }
//       }
//     }
//   }
// `

export const query = graphql`
  {
    snippets: allMarkdownRemark(
      filter: { fields: { collection: { eq: "snippets" } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

export default ({ data: { snippets } }) => (
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
          {snippets.edges.map(({ node }, i) => (
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
