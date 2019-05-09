import React from "react"
import styled from "styled-components"
import Minion from "../text/minion"
import { Link } from "gatsby"

const Sort = styled.div`
  display: flex;
  padding: 1rem 0;
`

const Group = styled.div`
  flex: 0 0 50%;
`

const Option = styled(Link)`
  color: #aaa;
  display: block;
`

export default () => (
  <div>
    <Minion>Sort</Minion>
    <Sort>
      <Group>
        <Option>Recent</Option>
        <Option>Featured</Option>
        <Option>Trending</Option>
        <Option>Favorites</Option>
      </Group>
      <Group>
        <Option>All Time</Option>
        <Option>Past Year</Option>
        <Option>Past Month</Option>
        <Option>Past Week</Option>
      </Group>
    </Sort>
  </div>
)
