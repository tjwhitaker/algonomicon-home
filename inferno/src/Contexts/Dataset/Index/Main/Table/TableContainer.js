import { createComponent } from 'inferno-fela'
import HeadContainer from './Head/HeadContainer'
import BodyContainer from './Body/BodyContainer'

const Table = createComponent(() => ({
  width: '100%'
}), 'table')

const TableContainer = ({ datasets }) => (
  <Table>
    <HeadContainer />
    <BodyContainer datasets={datasets} />
  </Table>
)

export default TableContainer