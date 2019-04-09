import { inject, observer } from 'inferno-mobx'

const AdminProjectDetailContainer = ({ ProjectStore, match }) => {
  const project = ProjectStore.fetchProject(match.params.slug)

  return (
    <div>
      { project && (
        <div>
          <div>
            <label>Name:</label>
            <input type="text" value={project.name} />
          </div>

          <div>
            <label>Slug:</label>
            <input type="text" value={project.slug} />
          </div>

          <div>
            <label>Hero:</label>
            <input type="text" value={project.hero} />
          </div>

          <div>
            <label>Description:</label> 
            <textarea rows="5" value={project.description} />
          </div>

          <div>
            <label>Content:</label> 
            <textarea rows="10" value={project.content} />
          </div>
        </div>
      )}
    </div>
  )
}

export default inject('ProjectStore')(observer(AdminProjectDetailContainer))