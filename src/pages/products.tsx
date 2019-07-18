import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout } from "../components"

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>Products | Algonomicon</title>
    </Helmet>
    <Products>
      <Product>
        <a href="https://www.designbyhumans.com/shop/t-shirt/men/lunar-fruit/596158/">
          <Image fluid={data.file1.childImageSharp.fluid} alt="Placeholder" />
          <Description>
            <h3>Lunar Fruit</h3>
            <h4>$25</h4>
          </Description>
        </a>
      </Product>
      <Product>
        <a href="https://www.designbyhumans.com/shop/t-shirt/men/jellyspace/224586/">
          <Image fluid={data.file2.childImageSharp.fluid} alt="Placeholder" />
          <Description>
            <h3>Jelly Space</h3>
            <h4>$25</h4>
          </Description>
        </a>
      </Product>
      <Product>
        <a href="https://www.designbyhumans.com/shop/t-shirt/men/dinosaur-meteorite-scissors/895764/">
          <Image fluid={data.file3.childImageSharp.fluid} alt="Placeholder" />
          <Description>
            <h3>Dinosaur, Metorite, Scissors</h3>
            <h4>$25</h4>
          </Description>
        </a>
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
    color: hsla(0, 0%, 0%, 0.8);
  }
  h4 {
    margin-top: 0;
    color: hsla(0, 0%, 0%, 0.8);
  }
`

export const query = graphql`{ ...Products }`
