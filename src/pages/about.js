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
        I decided to pursue graduate school in late 2018. I missed the deep work
        and collaboration that universities offer and I was ready to switch
        gears from contract web development to something that I believe will
        shape the future of technology. I knew I wanted to work with data and
        machine learning, but I didn't know what I wanted to do exactly, so I
        started this website to explore ideas and study state of the art machine
        learning techniques.
      </p>

      <p>
        The more I write and explore, the more I find myself drawn to projects
        in the natural sciences. There's something about these projects that
        makes me feel like the work has purpose and meaning. I want to feel like
        I'm making a difference and I dream of a future where I can help
        scientists and researchers do better work and manage the increasingly
        larger and more complex datasets that describe their experiments.
      </p>

      <h3>What is Algonomicon for?</h3>
      <p>
        This website is a place to learn how to apply data science and machine
        learning techniques to research projects in science. We're building a
        collection of algorithms, datasets, models, papers and code snippets in
        order to provide a pathway for learning and improving data skills in
        science.
      </p>

      <h3>Who is Algonomicon for?</h3>
      <p>
        This website is for Analysts, Programmers, and Researchers. I'm trying
        to make my writing as accessible as possible, but this project will be
        targeted towards people with some base scientific, programming and
        statistics knowledge. I'll try to not gloss over anything that may be
        too complex or advanced, but if I do I'm sorry and please bear with me
        as this is as much a learning process for me as the articles will
        hopefully be for you!
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
