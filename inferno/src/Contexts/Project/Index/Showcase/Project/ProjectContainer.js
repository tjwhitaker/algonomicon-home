import { Link } from 'inferno-router'
import { createComponent } from 'inferno-fela'
import HeroContainer from './Hero/HeroContainer'
import ContentContainer from './Content/ContentContainer'

const Project = createComponent(() => ({
  display: 'flex',
  padding: '1.5rem 0',
  alignItems: 'center',

  '&:first-child': {
    paddingTop: '0'
  }
}), Link, ['to'])

const ProjectContainer = ({ project }) => (
  <Project to={`/projects/${project.slug}`}>
    <HeroContainer project={project} />
    <ContentContainer project={project} />
  </Project>
)

export default ProjectContainer