import { Component } from 'inferno'
import { Link } from 'inferno-router'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'

const styles = {
  table: () => ({
    width: '100%'
  }),
  headerRow: (props) => ({
    borderBottom: '1px solid #ccc'
  }),
  headerCell: () => ({
    padding: '1.2rem 0',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#777',
    fontSize: '1.2rem',
    textTransform: 'uppercase'
  }),
  row: (props) => ({
    borderBottom: '1px solid #ccc',
    display: 'table-row'
  }),
  cell: () => ({
    padding: '1.4rem 0',
    color: 'black',
    fontWeight: 'normal',
    fontSize: '1.2rem'
  })
}

const Table = createComponent(styles.table, 'table')
const HeaderRow = createComponent(styles.headerRow, 'tr')
const HeaderCell = createComponent(styles.headerCell, 'th')
const Row = createComponent(styles.row, Link, ['to'])
const Cell = createComponent(styles.cell, 'td')

@inject('DatasetStore') 
@observer class TableContainer extends Component {
  componentDidMount() {
    if (this.props.DatasetStore.datasets.length === 0) {
      this.props.DatasetStore.fetchDatasets()
    }
  }

  render() {
    return (
      <Table>
        <thead>
          <HeaderRow>
            <HeaderCell>Name</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Instances</HeaderCell>
          </HeaderRow>
        </thead>
        <tbody>
          {this.props.DatasetStore.datasets.map(dataset => (
            <Row to={'/datasets/' + dataset.id}>
              <Cell>{dataset.name}</Cell>
              <Cell>{dataset.description}</Cell>
              <Cell>{dataset.instances}</Cell>
            </Row>
          ))}
        </tbody>
      </Table>
    )
  }
}

export default TableContainer