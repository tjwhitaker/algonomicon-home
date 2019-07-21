import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Minion, Sidebar } from "../components"

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>About | Algonomicon</title>
    </Helmet>
    <Main>
      <Title>About</Title>
      <p>I, for one, welcome our new computer overlords. Watson 2011.</p>
      <h3>Who is Algonomicon for?</h3>
      <p>This website is for Analysts, Programmers, and Researchers.</p>
      <div>
        <h3>What is Algonomicon for?</h3>
        <p>
          This website is a place to learn how to apply data science and machine
          learning techniques to research projects in science.
        </p>
      </div>
    </Main>
    <Sidebar>
      <Minion>Stuff</Minion>
    </Sidebar>
  </Layout>
)

const Title = styled.h1`
  margin-top: 0;
`

export const query = graphql`
  {
    file(relativePath: { eq: "astronaut.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
