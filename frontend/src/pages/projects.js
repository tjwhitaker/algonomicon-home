import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout } from "../components"

export const query = graphql`
  {
    projects: allSanityProject(sort: { fields: [_createdAt], order: DESC }) {
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

export default ({ data: { projects } }) => (
  <Layout>
    <Helmet>
      <title>Projects | Algonomicon</title>
    </Helmet>
    <Projects>
      {projects.edges.map(({ node }, i) => (
        <Link to={`/projects/${node.slug.current}`} key={i}>
          <Project>
            <Preview>
              <Image fluid={node.heroImage.asset.fluid} />
            </Preview>
            <Content>
              <h3>{node.title}</h3>
              <p>{node.description}</p>
            </Content>
          </Project>
        </Link>
      ))}
    </Projects>
  </Layout>
)

const Projects = styled.div`
  grid-column: 1 / span 2;
`

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

  p,
  h3 {
    color: hsla(0, 0%, 0%, 0.8);
  }

  p {
    font-weight: normal;
  }
`
