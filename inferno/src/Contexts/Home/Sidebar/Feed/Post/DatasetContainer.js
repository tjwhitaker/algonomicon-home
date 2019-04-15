import { Link } from 'inferno-router'
import { Name, Content, Meta } from './PostContainer'
import moment from 'moment'

const DatasetContainer = ({ dataset }) => (
  <Link to={'/datasets/' + dataset.slug}>
    <Name>{dataset.name}</Name>
    <Content>{dataset.description.substring(0, 100)}...</Content>
    <Meta>Dataset from {moment(dataset.createdAt).fromNow()}</Meta>
  </Link>
)

export default DatasetContainer