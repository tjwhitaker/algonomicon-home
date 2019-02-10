import { Link } from 'inferno-router'
import { createComponent } from 'inferno-fela'
import { css } from 'glamor'
import ContentContainer from './Content/ContentContainer'
import ImageContainer from './Image/ImageContainer'

const Item = createComponent(() => ({
  padding: '1.5rem 0'
}))

const ItemContainer = ({ article }) => (
  <Item>
    <Link to={`/articles/${article.slug}`}>
      <ImageContainer src={article.hero} alt="" />
      <ContentContainer name={article.name} description={article.description.substring(0, 100)} />
    </Link>
  </Item>
)

export default ItemContainer