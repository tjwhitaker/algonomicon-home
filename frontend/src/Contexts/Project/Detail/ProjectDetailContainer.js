import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import LoadingContainer from '../../../Shared/Loading/LoadingContainer'

const styles = {
  title: () => ({
    marginBottom: '1.4rem'
  })
}

const Title = createComponent(styles.title, 'h1')

@inject('ProjectStore')
@observer class ProjectDetailContainer extends Component {
  componentDidMount() {
    const { ProjectStore } = this.props

    if (ProjectStore.projects.length === 0) {
      ProjectStore.fetchProjects()
    }
  }

  render() {
    const { ProjectStore: { projects, loading } , match: {params} } = this.props
    const project = projects.find(project => project.slug === params.slug)
    const error = project ? '' : 'Can\'t find project.'

    if (project) { document.title = project.name + ' | Algonomicon' }

    return (
      <div>
        { loading ? <LoadingContainer /> :
          error ? <p>{error}</p> :
          project && (
            <Title>{project.name}</Title>
          )
        }
      </div>
    )
  }
}

export default ProjectDetailContainer