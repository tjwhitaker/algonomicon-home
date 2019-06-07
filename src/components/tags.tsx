import React from "react"
import styled from "styled-components"
import Minion from "./minion"
import { Link } from "gatsby"

const Tags = styled.div`
  padding: 1rem 0;
`

const Tag = styled(Link)`
  margin-right: 0.5rem;
  display: inline-block;
  color: #aaa;
`

export default () => (
  <div>
    <Minion>Tags</Minion>
    <Tags>
      <Tag to="/tags/art">Art</Tag>
      <Tag>Fun</Tag>
      <Tag>Games</Tag>
      <Tag>General</Tag>
      <Tag>News</Tag>
      <Tag>Language</Tag>
      <Tag>Vision</Tag>
      <Tag>Reinforcment</Tag>
      <Tag>Unsupervised</Tag>
      <Tag>Games</Tag>
      <Tag>General</Tag>
      <Tag>News</Tag>
      <Tag>Language</Tag>
      <Tag>Vision</Tag>
      <Tag>Art</Tag>
      <Tag>Fun</Tag>
      <Tag>Games</Tag>
      <Tag>General</Tag>
      <Tag>News</Tag>
      <Tag>Language</Tag>
      <Tag>Vision</Tag>
    </Tags>
  </div>
)
