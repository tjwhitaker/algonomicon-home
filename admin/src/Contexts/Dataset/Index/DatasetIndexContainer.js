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

@inject('DatasetStore')
@observer class DatasetIndexContainer extends Component {
  componentDidMount() {
    if (this.props.DatasetStore.datasets.length === 0) {
      this.props.DatasetStore.fetchDatasets()
    }
  }

  render() {
    return (
      <div>
        {this.props.DatasetStore.datasets.map((dataset) => (
          <Row>
            <Cell>{dataset.name}</Cell>
            <Cell><Link to={'/datasets/' + dataset.id}>View</Link></Cell>
            <Cell><Link to={'/datasets/' + dataset.id + '/edit'}>Edit</Link></Cell>
            <Cell><Link to={'/datasets/' + dataset.id}>Delete</Link></Cell>
          </Row>
        ))}
        <Link to="/datasets/new">New Dataset</Link>
      </div>
    )
  }
}

export default DatasetIndexContainer