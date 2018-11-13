import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'

const styles = {
  table: () => ({
    width: '100%',
    border: '1px solid #ccc'
  }),
  headerRow: (props) => ({
    borderBottom: '1px solid #ccc',
    background: props.theme.ravenclaw
  }),
  headerCell: () => ({
    padding: '1.4rem',
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'monospace',
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

class TableContainer extends Component {
  constructor() {
    super()

    this.state = {
      events: []
    }
  }

  componentDidMount() {
    this.setState({
      events: [
        {
          name: 'NIPS: Neural Information Processing Systems',
          location: 'Montreal, Canada',
          date: 'Dec 02 - Dec 08'
        },
        {
          name: 'SC: The International Conference for High Performance Computing',
          location: 'Dallas, TX',
          date: 'Aug 19 - Aug 23'
        },
        {
          name: 'ICML: International Conference on Machine Learning',
          location: 'Stockholm, Sweden',
          date: 'Jul 10 - Jul 15'
        },
        {
          name: 'CVPR: Computer Vision and Pattern Recognition',
          location: 'Long Beach, CA',
          date: 'Jun 15 - Jun 21'
        },
        {
          name: 'KDD: Knowledge Discovery and Data Mining',
          location: 'London, UK',
          date: 'Aug 19, Aug 23'
        }
      ]
    })
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
          {this.state.events.map(event => (
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