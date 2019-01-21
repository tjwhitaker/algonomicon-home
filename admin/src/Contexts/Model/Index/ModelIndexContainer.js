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

@inject('ModelStore')
@observer class ModelIndexContainer extends Component {
  componentDidMount() {
    if (this.props.ModelStore.models.length === 0) {
      this.props.ModelStore.fetchModels()
    }  
  }

  render() {
    return (
      <div>
        {this.props.ModelStore.models.map((model) => (
          <Row>
            <Cell>{model.name}</Cell>
            <Cell><Link to={'/models/' + model.id}>View</Link></Cell>
            <Cell><Link to={'/models/' + model.id + '/edit'}>Edit</Link></Cell>
            <Cell><Link to={'/models/' + model.id}>Delete</Link></Cell>
          </Row>
        ))}
        <Link to="/models/new">New Model</Link>
      </div>
    )
  }
}

export default ModelIndexContainer