import { Link } from 'inferno-router'
import { Name, Content, Meta } from './PostContainer'
import moment from 'moment'

const VideoContainer = ({ video }) => (
  <Link to={'/videos/' + video.slug}>
    <Name>{video.name}</Name>
    <Content>{video.description.substring(0, 100)}</Content>
    <Meta>Event from {moment(video.createdAt).fromNow()}</Meta>
  </Link>
)

export default VideoContainer