import { Link } from 'inferno-router'
import { Name, Content, Meta } from './PostContainer'
import moment from 'moment'

export const PaperContainer = ({ paper }) => (
  <Link to={'/papers/' + paper.slug}>
    <Name>{paper.name}</Name>
    <Content>{paper.abstract.substring(0, 100)}...</Content>
    <Meta>Paper from {moment(paper.created_at).fromNow()}</Meta>
  </Link>
)
