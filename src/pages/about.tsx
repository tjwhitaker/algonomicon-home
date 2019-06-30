import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Sidebar, Minion } from "../components"

export const query = graphql`
  {
    file(relativePath: { eq: "tim.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>About | Algonomicon</title>
    </Helmet>
    <Main>
      <p>
        Hello world! My name is Tim Whitaker and I created Algonomicon. I'm
        training to become a better machine learning engineer and I built this
        website to help others who are looking to do the same.
      </p>

      <p>
        I'm going to be pursuing a M.S. in Computer Science in the fall at
        Colorado State University. I'm really excited to do research in machine
        learning and in the mean time, I'm writing articles, building software
        and collecting datasets in order to learn as much as I can.
      </p>

      <p>
        I'm hoping to turn Algonomicon into a platform for kickstarting amazing
        machine learning projects. I want to make it easier for people to work
        on problems that can have a positive and lasting impact on the world.
      </p>

      <p>
        If you have ideas for making Algonomicon even better, I'd love to hear
        them! Please feel free to reach out to me at tim@algonomicon.com.
      </p>
    </Main>
    <Sidebar>
      <div>
        <Minion>Team</Minion>
        <Container>
          <Image fluid={data.file.childImageSharp.fluid} alt="Profile" />
        </Container>
      </div>
    </Sidebar>
  </Layout>
)

const Container = styled.div`
  margin-top: 1rem;
`
