import { Link } from 'inferno-router'
import { Name, Content, Meta } from './PostContainer'
import moment from 'moment'

export const ProjectContainer = ({ project }) => (
  <Link to={'/projects/' + project.slug}>
    <Name>{project.name}</Name>
    <Content>{project.description.substring(0, 100)}...</Content>
    <Meta>Project from {moment(project.createdAt).fromNow()}</Meta>
  </Link>
)