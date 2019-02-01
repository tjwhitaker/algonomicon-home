import { Component } from 'inferno'
import { CategoryLink } from '../Theme/Links'
import { createComponent } from 'inferno-fela'

const Categories = createComponent(() => ({
  display: 'flex',
  width: '100%',
  marginBottom: '1.4rem',
  paddingBottom: '1.4rem',
  borderBottom: '1px solid #ccc'
}))

export const CategoriesContainer = () => (
  <Categories>
    <CategoryLink exact to="/" activeClassName="active">Home</CategoryLink>
    <CategoryLink to="/articles" activeClassName="active">Articles</CategoryLink>
    <CategoryLink to="/datasets" activeClassName="active">Datasets</CategoryLink>
    <CategoryLink to="/events" activeClassName="active">Events</CategoryLink>
    <CategoryLink to="/papers" activeClassName="active">Papers</CategoryLink>
    <CategoryLink to="/projects" activeClassName="active">Projects</CategoryLink>
  </Categories>
)
