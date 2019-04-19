import React from "react"
import Wrapper from "../wrapper"
import styled from "styled-components"

const Footer = styled.div`
  background: #111;
`

const Copyright = styled.p`
  color: #ccc;
  margin: 0;
`

export default () => (
  <Footer>
    <Wrapper>
      <Copyright>&copy; Algonomicon LLC 2019</Copyright>
    </Wrapper>
  </Footer>
)
