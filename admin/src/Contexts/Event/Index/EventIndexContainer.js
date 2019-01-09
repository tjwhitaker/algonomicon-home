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

@inject('EventStore')
@observer class EventIndexContainer extends Component {
  componentDidMount() {
    if (this.props.EventStore.events.length === 0) {
      this.props.EventStore.fetchEvents()
    }
  }

  render() {
    return (
      <div>
        {this.props.EventStore.events.map((event) => (
          <Row>
            <Cell>{event.name}</Cell>
            <Cell><Link to={'/events/' + event.id}>View</Link></Cell>
            <Cell><Link to={'/events/' + event.id}>Edit</Link></Cell>
            <Cell><Link to={'/events/' + event.id}>Delete</Link></Cell>
          </Row>
        ))}
        <Link to="/events/new">New Event</Link>
      </div>
    )
  }
}

export default EventIndexContainer