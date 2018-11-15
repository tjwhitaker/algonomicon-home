import { action, observable } from 'mobx'

class ProjectStore {
  @observable projects = []

  @action
  fetchProjects() {
    this.projects = []
  }
}

export default ProjectStore