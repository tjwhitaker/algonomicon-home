import { inject, observer } from 'inferno-mobx'
import ShowcaseContainer from './Showcase/ShowcaseContainer'

const ProjectIndexContainer = ({ ProjectStore }) => {
  document.title = 'Projects | Algonomicon'
  ProjectStore.fetchProjects()

  return (
    <div>
      <ShowcaseContainer projects={ProjectStore.projects} />
    </div>
  )
}

export default inject('ProjectStore')(observer(ProjectIndexContainer))