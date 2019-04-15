import { observable, runInAction } from 'mobx'

class ProjectStore {
  @observable projects = []
  @observable loading = false

  fetchProjects = async () => {
    if (this.projects.length === 0) {
      const response = await fetch(`${process.env.INFERNO_APP_API}/projects`)
      const projects = await response.json()

      runInAction(() => {
        this.projects = projects
      })
    }
  }

  fetchProject = (slug) => {
    if (this.projects.length === 0) {
      this.fetchProjects()
    }

    return this.projects.find(project => project.slug === slug)
  }
}

export default ProjectStore