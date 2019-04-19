import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Categories = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
`

const CategoryLink = styled(Link)`
  margin-right: 2rem;
  font-size: 0.87055rem;
  font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`

export default () => (
  <Categories>
    <CategoryLink to="/" activeClassName="active">
      Home
    </CategoryLink>
    <CategoryLink to="/articles" activeClassName="active">
      Articles
    </CategoryLink>
    <CategoryLink to="/datasets" activeClassName="active">
      Datasets
    </CategoryLink>
    <CategoryLink to="/papers" activeClassName="active">
      Papers
    </CategoryLink>
    <CategoryLink to="/projects" activeClassName="active">
      Projects
    </CategoryLink>
    <CategoryLink to="/videos" activeClassName="active">
      Videos
    </CategoryLink>
  </Categories>
)
