import { action, observable } from 'mobx'

class ProjectStore {
  @observable projects = []
  @observable loading = false

  @action fetchProjects() {
    this.loading = true

    fetch(`${process.env.INFERNO_APP_API}/projects`)
      .then(response => response.json())
      .then(projects => this.projects = projects)
      .catch(error => console.log(error))
      .finally(() => this.loading = false)
  }
}

export default ProjectStore