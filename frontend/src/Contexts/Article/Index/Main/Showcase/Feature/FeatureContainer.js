import { createComponent } from 'inferno-fela'
import { Link } from 'inferno-router'
import ContentContainer from './Content/ContentContainer'
import ImageContainer from './Image/ImageContainer'

const Feature = createComponent(() => ({
  flex: '0 0 100%',
  position: 'relative'
}))

const FeatureContainer = ({ article }) => (
  <Feature>
    <Link to={`/articles/${article.slug}`}>
      <ImageContainer src={article.hero} alt="" />
      <ContentContainer name={article.name} description={article.description.substring(0, 100)} />
    </Link>
  </Feature>
)

export default FeatureContainer