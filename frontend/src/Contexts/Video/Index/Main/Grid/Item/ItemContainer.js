import { Link } from 'inferno-router'
import { createComponent } from 'inferno-fela'
import ContentContainer from './Content/ContentContainer'
import ImageContainer from './Image/ImageContainer'

const Item = createComponent(() => ({
  paddingBottom: '1.5rem'
}))

const ItemContainer = ({ video }) => (
  <Item>
    <Link to={`/videos/${video.slug}`}>
      <ImageContainer src={video.hero} alt="" />
      <ContentContainer name={video.name} description={video.description.substring(0, 100)} />
    </Link>
  </Item>
)

export default ItemContainer