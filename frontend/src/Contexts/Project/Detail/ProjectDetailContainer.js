import { inject, observer } from 'inferno-mobx'

const ProjectDetailContainer = ({ ProjectStore, match: {params} }) => {
  const project = ProjectStore.fetchProject(params.slug)

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