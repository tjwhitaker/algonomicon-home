import { createComponent } from 'inferno-fela'
import CategoryLink from './CategoryLink'

const Categories = createComponent(() => ({
  display: 'flex',
  width: '100%',
  paddingBottom: '1.5rem',
  marginBottom: '1.5rem',
  borderBottom: '1px solid #ccc'
}))

const CategoriesContainer = () => (
  <Categories>
    <CategoryLink to="/" exact activeClassName="active">Home</CategoryLink>
    <CategoryLink to="/articles" activeClassName="active">Articles</CategoryLink>
    <CategoryLink to="/datasets" activeClassName="active">Datasets</CategoryLink>
    {/* <CategoryLink to="/events" activeClassName="active">Events</CategoryLink>*/}
    <CategoryLink to="/papers" activeClassName="active">Papers</CategoryLink>
    <CategoryLink to="/projects" activeClassName="active">Projects</CategoryLink>
    <CategoryLink to="/videos" activeClassName="active">Videos</CategoryLink>
  </Categories>
)

export default CategoriesContainer