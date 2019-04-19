import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import Grid from "../components/layout/grid/grid"
import Main from "../components/layout/grid/main"
import Sidebar from "../components/layout/grid/sidebar"
import Search from "../components/sidebar/search"
import Sort from "../components/sidebar/sort"
import Tags from "../components/sidebar/tags"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Project = styled.div`
  display: flex;
  padding: 1rem 0;
  align-items: center;
`

const Preview = styled.div`
  flex: 0 0 50%;
  padding-right: 1rem;
`

const Content = styled.div`
  flex: 0 0 50%;
  padding-left: 1rem;
`

export default ({ data }) => (
  <Layout>
    {data.projects.edges.map(({ node }) => (
      <Project>
        <Preview>
          <Image fluid={node.heroImage.asset.fluid} />
        </Preview>
        <Content>
          <h3>{node.title}</h3>
          <p>{node.description}</p>
        </Content>
      </Project>
    ))}
  </Layout>
)

export const query = graphql`
  {
    projects: allSanityProject {
      edges {
        node {
          title
          slug {
            current
          }
          heroImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          description
        }
      }
    }
  }
`
