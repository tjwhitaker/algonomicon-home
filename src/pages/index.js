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
          Welcome to Algonomicon! This is a website that showcases work on
          applying machine learning algorithms to the fields of natural science.
          We are analyzing data, building models and writing articles to
          showcase how powerful these methods can be when applied to cutting
          edge research in astronomy, biology, chemistry, physics, etc.
        </p>

        <Image fluid={data.file.childImageSharp.fluid} alt="Inception" />

        <p style={{ margin: "1rem 0" }}>
          <i>
            Inception: A deep learning architecture developed by the AI research
            team at Google.
          </i>
        </p>

        <p>
          Thanks to increased power and large complex datasets, machine learning
          models are solving problems previously thought to be impossible! We
          are learning about the structure of nature through galaxies billions
          of light years away and particles billions of times smaller than an
          atom. Machine learning is helping us glean insights from the vast,
          complex datasets that describe our universe.
        </p>

        <blockquote>
          Truth is much too complicated to allow anything but approximations.
          <p>
            <i>- John Von Neumann</i>
          </p>
        </blockquote>

        <p>
          While we're focused on applying machine learning to cutting edge
          scientific research, we're also interested in projects that look to
          make an impact on social good or address the grand challenges that
          face humanity.
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
        <p>
          If you own or work at a company that is tackling global or social
          issues, we'd love to get in touch. Feel free to visit our{" "}
          <Link to="/contact">contact page</Link> or reach out directly to
          info@algonomicon.com.
        </p>
        <p>
          We support open source software. If you like our content, please join
          our mission and collaborate with us on{" "}
          <a href="https://github.com/algonomicon">Github</a>.
        </p>
      </Main>
      <Sidebar>
        <Minion>Feed</Minion>
        <Container>
          {feedItems.map((node, i) => (
            <Post key={i}>
              <Link to={`/${node.fields.collection}/${node.frontmatter.slug}`}>
                <h4>{node.frontmatter.title}</h4>
                <p>{node.excerpt}</p>
                <small>
                  {node.fields.collection[0].toUpperCase() +
                    node.fields.collection.slice(1, -1)}{" "}
                  from {moment(node.frontmatter.date).fromNow()}
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
  margin-right: -50px;
  padding-right: 42px;
  overflow: scroll;
  position: absolute;
`

export const query = graphql`
  {
    file(relativePath: { eq: "inception.jpg" }) {
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
        }
        fields {
          collection
        }
      }
    }
  }
`
