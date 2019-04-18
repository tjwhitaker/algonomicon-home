import React from "react"
import styled from "styled-components"
import Minion from "../text/minion"

const Sort = styled.div`
  display: flex;
  padding: 1rem 0;
`

const Half = styled.div`
  flex: 0 0 50%;
`

export default () => (
  <div>
    <Minion>Sort</Minion>
    <Sort>
      <Half>
        <div>Recent</div>
        <div>Featured</div>
        <div>Trending</div>
        <div>Favorites</div>
      </Half>
      <Half>
        <div>All Time</div>
        <div>Past Year</div>
        <div>Past Month</div>
        <div>Past Week</div>
      </Half>
    </Sort>
  </div>
)
