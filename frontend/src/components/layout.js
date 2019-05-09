import React from "react"
import styled from "styled-components"
import Categories from "./categories"
import Header from "./header"
import Footer from "./footer"
import Wrapper from "../wrapper"
import "../../static/layout.css"

export default ({ children }) => (
  <div>
    <Header />
    <Container>
      <Wrapper>
        <Categories />
        <Grid>
          {children}
        </Grid>
      </Wrapper>
    </Container>
    <Footer />
  </div>
)

const Container = styled.div`
  padding-bottom: 1rem;
  min-height: 60vh;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
`