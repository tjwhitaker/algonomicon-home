import React from "react"
import Wrapper from "./wrapper"
import styled from "styled-components"

export default () => (
  <Footer>
    <Wrapper>
      <Copyright>&copy; Algonomicon LLC 2019</Copyright>
    </Wrapper>
  </Footer>
)

const Footer = styled.div`
  background: #272822;
`

const Copyright = styled.p`
  color: #ccc;
  margin: 0;
`
