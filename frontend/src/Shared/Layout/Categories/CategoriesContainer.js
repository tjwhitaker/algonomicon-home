import { Link } from 'inferno-router'
import { css } from 'glamor'
import { longPrimer } from '../../Theme/Text'

const categoryList = css({
  display: 'flex',
  width: '100%',
  paddingBottom: '1.5rem',
  marginBottom: '1.5rem',
  borderBottom: '1px solid #ccc'
})

const categoryLink = css({
  marginRight: '2.8rem',
  color: '#007bff',
  fontWeight: 'bold'
}, longPrimer)

const CategoriesContainer = () => (
  <div {...categoryList}>
    <Link {...categoryLink} exact to="/" activeClassName="active">Home</Link>
    <Link {...categoryLink} to="/articles" activeClassName="active">Articles</Link>
    <Link {...categoryLink} to="/datasets" activeClassName="active">Datasets</Link>
    <Link {...categoryLink} to="/events" activeClassName="active">Events</Link>
    <Link {...categoryLink} to="/papers" activeClassName="active">Papers</Link>
    <Link {...categoryLink} to="/projects" activeClassName="active">Projects</Link>
  </div>
)

export default CategoriesContainer