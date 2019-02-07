import { createComponent } from 'inferno-fela'
import TableContainer from './Table/TableContainer'

const Main = createComponent(() => ({
  paddingRight: '1.5rem',
  borderRight: '1px solid #ccc'
}))

const MainContainer = () => {
  return (
    <Main>
      <TableContainer />
    </Main>
  )
}

export default MainContainer