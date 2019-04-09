import { inject, observer } from 'inferno-mobx'
import { Link } from 'inferno-router'

const AdminProjectIndexContainer = ({ ProjectStore }) => {
  ProjectStore.fetchProjects()

  return (
    <div>
      { ProjectStore.projects.map(project => (
        <Link to={`/admin/projects/${project.slug}`}>{project.name}</Link>
      ))}
    </div>
  )
}


export default inject('ProjectStore')(observer(AdminProjectIndexContainer))