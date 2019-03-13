import { createComponent } from 'inferno-fela'
import HeadContainer from './Head/HeadContainer'
import BodyContainer from './Body/BodyContainer'

const Table = createComponent(() => ({
  width: '100%'
}), 'table')

const TableContainer = ({ events }) => (
  <Table>
    <HeadContainer />
    <BodyContainer events={events} />
  </Table>
)

export default TableContainer