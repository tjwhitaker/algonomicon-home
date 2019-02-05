import { Link } from 'inferno-router'
import { title, content, meta } from './PostContainer'
import moment from 'moment'

export const EventContainer = (props) => (
  <Link to={'/events/' + props.data.slug}>
    <h2 {...title}>{props.data.name}</h2>
    <p {...content}>{props.data.location}</p>
    <p {...meta}>Event from {moment(props.data.created_at).fromNow()}</p>
  </Link>
)