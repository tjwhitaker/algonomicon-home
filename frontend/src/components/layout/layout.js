import React from "react"
import styled from "styled-components"
import Categories from "./categories"
import Header from "./header"
import Footer from "./footer"
import Wrapper from "../wrapper"
import "./layout.css"

const Container = styled.div`
  padding-bottom: 1rem;
  min-height: 65vh;
`

export default ({ children }) => (
  <div>
    <Header />
    <Container>
      <Wrapper>
        <Categories />
        {children}
      </Wrapper>
    </Container>
    <Footer />
  </div>
)
