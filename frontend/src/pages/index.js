import React from "react"
import SidebarLayout from "../components/layout/sidebar-layout"
import Main from "../components/layout/main"
import Sidebar from "../components/layout/sidebar"
import Feed from "../components/sidebar/feed"
import Image from "gatsby-image"
import { Helmet } from 'react-helmet'

export default ({ data }) => (
  <SidebarLayout>
    <Helmet>
      <title>Home | Algonomicon</title>
    </Helmet>
    <Main>
      <p>
        Thanks to increased power and large amounts of data, machine learning
        models are capable of solving problems previously thought to be
        impossible. Machine Learning applications are driving cars, improving
        healthcare diagnosis, and sequencing new proteins. Machine learning
        has the power to do a lot of good and we want to tell the stories of
        people using it to change the world.
      </p>

      <Image
        fluid={data.file.childImageSharp.fluid}
        alt="Fully Convolutional Network"
      />

      <p>
        <i>
          Fully Convolutional Network: A state of the art image segmentation architecture.
        </i>
      </p>

      <blockquote>
        Truth is much too complicated to allow anything but approximations.
        <p>
          <i>- John Von Neumann</i>
        </p>
      </blockquote>

      <p>We're particularly interested in the following research topics:</p>

      <ul>
        <li>Climate Change and Anthropogenic Impacts on the Environment</li>
        <li>Water Scarcity and Pollution</li>
        <li>Poverty, Disease and Malnutrition</li>
        <li>Overpopulation and Global Education</li>
        <li>Cyber Threats and Regional Stability</li>
        <li>Wildlife Conservation and Biodiversity Loss</li>
        <li>Renewable and Alternative Energy</li>
      </ul>

      <p>
        If you own or work at a company that is tackling global or social
        issues, we'd love to get in touch. Feel free to visit our{" "}
        <a href="/contact">contact page</a> or reach out directly to
        info@algonomicon.com.
      </p>

      <p>
        We support open source software. If you like our content, please join
        our mission and collaborate with us on{" "}
        <a href="https://github.com/algonomicon">Github</a>.
      </p>
    </Main>
    <Sidebar>
      <Feed />
    </Sidebar>
  </SidebarLayout>
)

export const query = graphql`
  {
    file(relativePath: { eq: "fcn8.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
