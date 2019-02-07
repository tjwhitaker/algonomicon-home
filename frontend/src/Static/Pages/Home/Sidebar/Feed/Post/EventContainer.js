import { Link } from 'inferno-router'
import { Name, Content, Meta } from './PostContainer'
import moment from 'moment'

export const EventContainer = ({ event }) => (
  <Link to={'/events/' + event.slug}>
    <Name>{event.name}</Name>
    <Content>{event.location}</Content>
    <Meta>Event from {moment(event.created_at).fromNow()}</Meta>
  </Link>
)