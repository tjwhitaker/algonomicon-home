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

@inject('EventStore') 
@observer class TableContainer extends Component {
  componentDidMount() {
    this.props.EventStore.fetchEvents()
  }

  render() {
    return (
      <Table>
        <thead>
          <HeaderRow>
            <HeaderCell>Name</HeaderCell>
            <HeaderCell>Location</HeaderCell>
            <HeaderCell>Date</HeaderCell>
          </HeaderRow>
        </thead>
        <tbody>
          {this.props.EventStore.events.map(event => (
            <Row>
              <Cell>{event.name}</Cell>
              <Cell>{event.location}</Cell>
              <Cell>{event.date}</Cell>
            </Row>
          ))}
        </tbody>
      </Table>
    )
  }
}

export default TableContainer