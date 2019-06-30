import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout } from "../components"

export const query = graphql`
  {
    file1: file(relativePath: { eq: "placeholder1.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    file2: file(relativePath: { eq: "placeholder2.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    file3: file(relativePath: { eq: "placeholder3.jpg" }) {
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
      <title>Products | Algonomicon</title>
    </Helmet>
    <Products>
      <Product>
        <Image fluid={data.file1.childImageSharp.fluid} alt="Placeholder" />
        <Description>
          <h3>Lunar Fruit</h3>
          <h4>$25</h4>
        </Description>
      </Product>
      <Product>
        <Image fluid={data.file2.childImageSharp.fluid} alt="Placeholder" />
        <Description>
          <h3>Jelly Space</h3>
          <h4>$25</h4>
        </Description>
      </Product>
      <Product>
        <Image fluid={data.file3.childImageSharp.fluid} alt="Placeholder" />
        <Description>
          <h3>Dinosaur, Metorite, Scissors</h3>
          <h4>$25</h4>
        </Description>
      </Product>
    </Products>
  </Layout>
)

const Products = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  justify-content: space-between;
`

const Product = styled.div`
  flex: 0 0 30%;
  padding: 1rem 0;
  align-items: center;
`

const Description = styled.div`
  h3 {
    margin: 1rem 0 0.5rem 0;
  }
  h4 {
    margin-top: 0;
  }
`
