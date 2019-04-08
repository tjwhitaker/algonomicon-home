import { inject, observer } from 'inferno-mobx'

const AdminProjectIndexContainer = ({ ProjectStore }) => {
  ProjectStore.fetchProjects()

  return (
    <div>
      { ProjectStore.projects.map(project => (
        <p>{project.name}</p>
      ))}
    </div>
  )
}


export default inject('ProjectStore')(observer(AdminProjectIndexContainer))