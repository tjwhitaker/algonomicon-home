import { Link } from 'inferno-router'
import { Name, Content, Meta } from './PostContainer'
import moment from 'moment'

const ArticleContainer = ({ article }) => (
  <Link to={'/articles/' + article.slug}>
    <Name>{article.name}</Name>
    <Content>{article.description.substring(0, 100)}...</Content>
    <Meta>Article from {moment(article.createdAt).fromNow()}</Meta>
  </Link>
)

export default ArticleContainer