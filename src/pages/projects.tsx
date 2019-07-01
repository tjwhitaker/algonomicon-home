import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout } from "../components"
import { ProjectsProps } from "../types/content"

export const query = graphql`
  {
    projects: allMarkdownRemark(
      filter: { fields: { collection: { eq: "projects" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt(pruneLength: 400)
        frontmatter {
          title
          slug
        }
      }
    }
  }
`

export default ({ data }: ProjectsProps) => (
  <Layout>
    <Helmet>
      <title>Projects | Algonomicon</title>
    </Helmet>
    <Projects>
      {data.projects.nodes.map((node, i) => (
        <Link to={`/projects/${node.frontmatter.slug}`} key={i}>
          <Project>
            <Preview>
              <img src="https://source.unsplash.com/600x350/?startup" />
            </Preview>
            <Content>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.excerpt}</p>
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
