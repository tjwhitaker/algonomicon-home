import Cell from './Cell'
import Row from './Row'

const BodyContainer = ({ events }) => (
  <tbody>
    { events.map(event => (
        <Row to={`/events/${event.slug}`}>
          <Cell>{event.name}</Cell>
          <Cell>{event.location}</Cell>
          <Cell>{event.date}</Cell>
        </Row>
      ))
    }
  </tbody>
)

export default BodyContainer