import { createComponent } from 'inferno-fela'
import TableContainer from './Table/TableContainer'

const Main = createComponent(() => ({
  paddingRight: '1.5rem',
  borderRight: '1px solid #ccc'
}))

const MainContainer = ({ events }) => {
  return (
    <Main>
      <TableContainer events={events} />
    </Main>
  )
}

export default MainContainer