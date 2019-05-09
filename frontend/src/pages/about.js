import React from "react"
import styled from 'styled-components'
import Main from '../components/layout/main'
import Sidebar from '../components/layout/sidebar'
import SidebarLayout from "../components/layout/sidebar-layout"
import { Helmet } from 'react-helmet'
import Image from 'gatsby-image'
import Minion from '../components/text/minion'

export default ({data}) => (
  <SidebarLayout>
    <Helmet>
      <title>About | Algonomicon</title>
    </Helmet>
    <Main>
      <p>Hello world! My name is Tim Whitaker and I created Algonomicon. I'm training to become a better machine learning engineer and I built this website to help others who are looking to do the same.</p>

      <p>I'm going to be pursuing a M.S. in Computer Science in the fall at Colorado State University. I'm really excited to do research in machine learning and in the mean time, I'm writing articles, building software and collecting datasets in order to learn as much as I can.</p>

      <p>I'm hoping to turn Algonomicon into a platform for kickstarting amazing machine learning projects. I want to make it easier for people to work on problems that can have a positive and lasting impact on the world.</p>
    </Main>
    <Sidebar>
      <div>
        <Minion>Team</Minion>
        <Container>
          <Image
            fluid={data.file.childImageSharp.fluid}
            alt="Inception"
          />
        </Container>
      </div>
    </Sidebar>
  </SidebarLayout>
)

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

const Container = styled.div`
  margin-top:1rem;
`