import Row from './Row'
import Cell from './Cell'

const HeadContainer = () => (
  <thead>
    <Row>
      <Cell>Name</Cell>
      <Cell>Description</Cell>
      <Cell>Instances</Cell>
      <Cell>Format</Cell>
    </Row>
  </thead>
)

export default HeadContainer