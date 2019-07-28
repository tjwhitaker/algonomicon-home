import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Minion, Sidebar } from "../components"

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>About | Algonomicon</title>
    </Helmet>
    <Main>
      <p>
        I decided to pursue graduate school in late 2018. I was starting to feel
        burnt out with web development, and while I love building web
        applications for myself and friends, I found that client work was
        getting less stimulating and more tiring. I wanted to switch gears and I
        missed the deep work and collaboration that universities offer. I knew I
        wanted to work with data and machine learning, but I didn't know what I
        wanted to do exactly, so I started this website to explore ideas and
        study state of the art machine learning techniques.
      </p>

      <p>
        The more I wrote and explored, the more I found I was drawn to projects
        in the natural sciences. There's something about these projects that
        make you feel like your work matters and has purpose and meaning. I want
        to feel like I'm making a difference. I dream of a future where I can
        help scientists and researchers do better work and manage the
        increasingly larger and more complex datasets that describe their
        experiments.
      </p>

      <h3>Who is Algonomicon for?</h3>
      <p>This website is for Analysts, Programmers, and Researchers.</p>

      <h3>What is Algonomicon for?</h3>
      <p>
        This website is a place to learn how to apply data science and machine
        learning techniques to research projects in science.
      </p>
    </Main>
    <Sidebar>
      <Minion>Photos</Minion>
      <div style={{ marginTop: "1rem" }}>
        <Image
          fluid={data.file1.childImageSharp.fluid}
          style={{ marginBottom: "1rem" }}
        />
        <Image fluid={data.file2.childImageSharp.fluid} />
      </div>
    </Sidebar>
  </Layout>
)

export const query = graphql`
  {
    file1: file(relativePath: { eq: "worm-turns.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    file2: file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
