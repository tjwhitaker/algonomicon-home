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

const Footer = styled.div``

const Copyright = styled.p`
  color: hsla(0, 0%, 0%, 0.8);
  margin: 0;
  border-top: 1px solid #ccc;
`
