import { Link } from 'inferno-router'
import { title, content, meta } from './PostContainer'
import moment from 'moment'

export const ProjectContainer = (props) => (
  <Link to={'/projects/' + props.data.slug}>
    <h2 {...title}>{props.data.name}</h2>
    <p {...content}>{props.data.description.substring(0, 100)}...</p>
    <p {...meta}>Project from {moment(props.data.created_at).fromNow()}</p>
  </Link>
)