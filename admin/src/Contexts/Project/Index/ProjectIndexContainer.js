import { Component } from 'inferno'
import { Link } from 'inferno-router'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'

const styles = {
  row: () => ({
    display: 'table-row'
  }),
  cell: () => ({
    display: 'table-cell',
    paddingRight: '1.4rem'
  })
}

const Row = createComponent(styles.row)
const Cell = createComponent(styles.cell)

@inject('ProjectStore')
@observer class ProjectIndexContainer extends Component {
  componentDidMount() {
    if (this.props.ProjectStore.projects.length === 0) {
      this.props.ProjectStore.fetchProjects()
    }
  }

  render() {
    return (
      <div>
        {this.props.ProjectStore.projects.map((project) => (
          <Row>
            <Cell>{project.name}</Cell>
            <Cell><Link to={'/projects/' + project.id}>View</Link></Cell>
            <Cell><Link to={'/projects/' + project.id}>Edit</Link></Cell>
            <Cell><Link to={'/projects/' + project.id}>Delete</Link></Cell>
          </Row>
        ))}
        <Link to="/projects/new">New Project</Link>
      </div>
    )
  }
}

export default ProjectIndexContainer