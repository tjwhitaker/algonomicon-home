import { Link } from 'inferno-router'
import { title, content, meta } from './PostContainer'
import moment from 'moment'

export const PaperContainer = (props) => (
  <Link to={'/papers/' + props.data.slug}>
    <h2 {...title}>{props.data.name}</h2>
    <p {...content}>{props.data.abstract.substring(0, 100)}...</p>
    <p {...meta}>Paper from {moment(props.data.created_at).fromNow()}</p>
  </Link>
)
