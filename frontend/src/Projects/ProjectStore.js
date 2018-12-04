import { action, observable } from 'mobx'

class ProjectStore {
  @observable projects = []

  @action fetchProjects() {
    fetch('http://localhost:8000/projects')
      .then(response => response.json())
      .then(projects => this.projects = projects)
  }
}

export default ProjectStore