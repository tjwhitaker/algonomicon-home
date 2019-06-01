import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default () => (
  <Categories>
    <CategoryLink
      to="/algorithms"
      activeClassName="active"
      partiallyActive={true}
    >
      Algorithms
    </CategoryLink>
    <CategoryLink
      to="/articles"
      activeClassName="active"
      partiallyActive={true}
    >
      Articles
    </CategoryLink>
    <CategoryLink to="/papers" activeClassName="active" partiallyActive={true}>
      Papers
    </CategoryLink>
    <CategoryLink
      to="/projects"
      activeClassName="active"
      partiallyActive={true}
    >
      Projects
    </CategoryLink>
    <CategoryLink
      to="/snippets"
      activeClassName="active"
      partiallyActive={true}
    >
      Snippets
    </CategoryLink>
  </Categories>
)

const Categories = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  @media screen and (max-width: 600px) {
    overflow-x: hidden;
  }
`

const CategoryLink = styled(Link)`
  margin-right: 2rem;
  font-size: 0.87055rem;
  font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  @media screen and (max-width: 600px) {
    font-size: 0.75rem;
    margin-right: 1.25rem;

    &:first-child {
      display: none;
    }
  }
`
