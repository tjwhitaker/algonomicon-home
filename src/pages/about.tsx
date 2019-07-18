import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Sidebar, Minion } from "../components"

type Props = {
  data: {
    file: {
      childImageSharp: {
        fluid: object 
      }
    }
  }
}

export default ({ data }: Props) => (
  <Layout>
    <Helmet>
      <title>About | Algonomicon</title>
    </Helmet>
    <Main>
      <h1>Work That Matters</h1>

      <h3>Who is this for?</h3>

      <h3>What is this for?</h3>
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

export const query = graphql`{ ...About }`
