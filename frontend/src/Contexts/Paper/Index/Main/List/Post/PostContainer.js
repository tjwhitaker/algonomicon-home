import { createComponent } from 'inferno-fela'
import { Link } from 'inferno-router'
import Description from './Description'
import Title from './Title'

const Post = createComponent(() => ({
  display: 'block',
  padding: '1.5rem 0',
  borderTop: '1px solid #ccc',

  '&:first-child': {
    paddingTop: 0,
    borderTop: 'none'
  }
}))

const PostContainer = ({ paper }) => (
  <Post>
    <Link to={`/papers/${paper.slug}`}>
      <Title>{paper.name}</Title>
      <Description>{paper.abstract.substring(0, 300)}...</Description>
    </Link>
  </Post>
)

export default PostContainer