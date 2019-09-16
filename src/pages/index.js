import React from "react"
import styled from "styled-components"
import moment from "moment"
import Image from "gatsby-image"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Minion, Post } from "../components"

export default ({ data }) => {
  const feedItems = data.allMarkdownRemark.nodes.sort((a, b) => {
    return moment(b.frontmatter.date).diff(moment(a.frontmatter.date))
  })

  return (
    <Layout>
      <Helmet>
        <title>Home | Algonomicon</title>
      </Helmet>
      <Main>
        <p>
          Welcome to Algonomicon! This is a website to explore cool datasets and
          machine learning algorithms.
        </p>

        <Image
          style={{ marginBottom: "2rem" }}
          fluid={data.file.childImageSharp.fluid}
          alt="Inception"
        />

        <p>
          <i>
            Inception: A deep learning architecture developed by the AI research
            team at Google.
          </i>
        </p>

        <p>
          Thanks to increased power and large complex datasets, machine learning
          models are solving problems at the cutting edge of science. We are
          learning about the structure of nature through galaxies billions of
          light years away and particles billions of times smaller than an atom.
          Machine learning is helping us glean insights from the vast, complex
          datasets that describe our universe.
        </p>

        <p>
          I'm really interested in projects looking to make an impact on social
          good or address the grand challenges that face humanity.
        </p>

        <ul>
          <li>Climate Change and Anthropogenic Impacts on the Environment</li>
          <li>Water Scarcity and Pollution</li>
          <li>Poverty, Disease and Malnutrition</li>
          <li>Overpopulation and Global Education</li>
          <li>Disaster Resilience and Regional Stability</li>
          <li>Wildlife Conservation and Biodiversity Loss</li>
          <li>Renewable and Alternative Energy</li>
        </ul>
      </Main>
      <Sidebar>
        <Minion>Feed</Minion>
        <Container>
          {feedItems.map((node, i) => (
            <Post key={i}>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                <h4>{node.frontmatter.title}</h4>
                <p>{node.excerpt}</p>
                <small>
                  {node.frontmatter.category} from{" "}
                  {moment(node.frontmatter.date).fromNow()}
                </small>
              </Link>
            </Post>
          ))}
        </Container>
      </Sidebar>
    </Layout>
  )
}

const Sidebar = styled.div`
  padding-left: 1rem;
  max-height: 100%;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 600px) {
    display: none;
  }
`

const Container = styled.div`
  max-height: 100%;
  max-width: 100%;
  margin-right: -50px;
  padding-right: 42px;
  overflow: auto;
  position: absolute;
`

export const query = graphql`
  {
    file(relativePath: { eq: "inception.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark {
      nodes {
        excerpt
        frontmatter {
          title
          slug
          date
          category
        }
        fields {
          collection
        }
      }
    }
  }
`
