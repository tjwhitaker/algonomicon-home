import React from "react"
import styled from "styled-components"
import Categories from "./categories"
import Header from "./header"
import Footer from "./footer"
import Wrapper from "./wrapper"
import "../../static/layout.css"
import "../../static/syntax.css"
import "../../node_modules/katex/dist/katex.min.css"

export default ({ children }) => (
  <div>
    <Header />
    <Container>
      <Wrapper>
        <Grid>{children}</Grid>
      </Wrapper>
    </Container>
  </div>
)

const Container = styled.div`
  padding-bottom: 1rem;
  min-height: 50vh;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
`
