import { Link } from 'inferno-router'
import { Name, Content, Meta } from './PostContainer'
import moment from 'moment'

const PaperContainer = ({ paper }) => (
  <Link to={'/papers/' + paper.slug}>
    <Name>{paper.name}</Name>
    <Content>{paper.abstract.substring(0, 100)}...</Content>
    <Meta>Paper from {moment(paper.createdAt).fromNow()}</Meta>
  </Link>
)

export default PaperContainer