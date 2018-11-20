import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'

const styles = {
  table: () => ({
    width: '100%',
    border: '1px solid #ccc'
  }),
  headerRow: (props) => ({
    borderBottom: '1px solid #ccc',
    background: '#333' 
  }),
  headerCell: () => ({
    padding: '1.4rem',
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white'
  }),
  row: (props) => ({
    borderBottom: '1px solid #ccc',

    '&:nth-child(odd)': {
      background: '#eee'
    }
  }),
  cell: () => ({
    padding: '1.4rem'
  })
}

const Table = createComponent(styles.table, 'table')
const HeaderRow = createComponent(styles.headerRow, 'tr')
const HeaderCell = createComponent(styles.headerCell, 'th')
const Row = createComponent(styles.row, 'tr')
const Cell = createComponent(styles.cell, 'td')

@inject('DatasetStore') 
@observer class TableContainer extends Component {
  componentDidMount() {
    this.props.DatasetStore.fetchDatasets()
  }

  render() {
    return (
      <Table>
        <thead>
          <HeaderRow>
            <HeaderCell>Name</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Instances</HeaderCell>
            <HeaderCell>Attributes</HeaderCell>
            <HeaderCell>Format</HeaderCell>

          </HeaderRow>
        </thead>
        <tbody>
          {this.props.DatasetStore.datasets.map(dataset => (
            <Row>
              <Cell>{dataset.name}</Cell>
              <Cell>{dataset.description}</Cell>
              <Cell>{dataset.instances}</Cell>
              <Cell>{dataset.attributes}</Cell>
              <Cell>{dataset.format}</Cell>

            </Row>
          ))}
        </tbody>
      </Table>
    )
  }
}

export default TableContainer