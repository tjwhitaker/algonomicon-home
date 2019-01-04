import { action, observable } from 'mobx'

class ProjectStore {
  @observable projects = []

  @action fetchProjects() {
    fetch(`${process.env.INFERNO_APP_API}/projects`)
      .then(response => response.json())
      .then(projects => this.projects = projects)
  }
}

export default ProjectStore