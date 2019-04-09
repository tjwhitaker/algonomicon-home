import { inject, observer } from 'inferno-mobx'

const ProjectDetailContainer = ({ ProjectStore, match }) => {
  const project = ProjectStore.fetchProject(match.params.slug)

  if (project) { document.title = `${project.name} | Algonomicon` }

  return (
    <div>
      { project && (
        <h1>{project.name}</h1>
      )}
    </div>
  )
}

export default inject('ProjectStore')(observer(ProjectDetailContainer))