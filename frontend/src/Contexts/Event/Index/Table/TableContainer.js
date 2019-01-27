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
    padding: '1.4rem 0.7rem',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#777',
    textTransform: 'uppercase',
    fontSize: '1.2rem',

    '&:first-child': {
      paddingLeft: '0'
    },
    '&:last-child': {
      paddingRight: '0'
    }
  }),
  row: (props) => ({
    borderBottom: '1px solid #ccc',
    display: 'table-row',
  }),
  cell: () => ({
    padding: '1.4rem 0.7rem',
    color: 'black',
    fontWeight: 'normal',
    fontSize: '1.4rem',
    verticalAlign: 'middle',

    '&:first-child': {
      paddingLeft: '0'
    },
    '&:last-child': {
      paddingRight: '0'
    }
  })
}

const Table = createComponent(styles.table, 'table')
const HeaderRow = createComponent(styles.headerRow, 'tr')
const HeaderCell = createComponent(styles.headerCell, 'th')
const Row = createComponent(styles.row, Link, ['to'])
const Cell = createComponent(styles.cell, 'td')

@inject('EventStore') 
@observer class TableContainer extends Component {
  componentDidMount() {
    if (this.props.EventStore.events.length === 0) {
      this.props.EventStore.fetchEvents()
    }
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
            <Row to={'/events/' + event.slug}>
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