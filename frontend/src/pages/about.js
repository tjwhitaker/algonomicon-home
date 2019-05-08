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
      <p>Hello, my name is Tim Whitaker and I created Algonomicon. I'm training to become a better machine learning engineer and I built this website to help others who are looking to do the same.</p>

      <p>We're doing research, writing articles, building software and collecting datasets in order to enable a stronger machine learning community.</p>
    </Main>
    <Sidebar>
      <div>
        <Minion>Team</Minion>
        <Image
          fluid={data.file.childImageSharp.fluid}
          alt="Inception"
        />
      </div>
    </Sidebar>
  </SidebarLayout>
)

export const query = graphql`
  {
    file(relativePath: { eq: "inception.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`