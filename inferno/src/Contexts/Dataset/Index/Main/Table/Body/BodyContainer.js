import Cell from './Cell'
import Row from './Row'

const BodyContainer = ({ datasets }) => (
  <tbody>
    { datasets.map(dataset => (
        <Row to={`/datasets/${dataset.slug}`}>
          <Cell>{dataset.name}</Cell>
          <Cell>{dataset.description}</Cell>
          <Cell>{dataset.instances}</Cell>
          <Cell>{dataset.format}</Cell>
        </Row>
      ))
    }
  </tbody>
)

export default BodyContainer