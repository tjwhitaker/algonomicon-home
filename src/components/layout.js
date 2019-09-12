import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import Header from "./header"
import Wrapper from "./wrapper"
import "../../static/main.css"
import "../../static/syntax.css"
import "../../static/typography.css"
import "../../node_modules/katex/dist/katex.min.css"

export default ({ children }) => (
  <div>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Fira+Mono:400,500,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
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
