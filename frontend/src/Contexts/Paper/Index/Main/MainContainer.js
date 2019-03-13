import { createComponent } from 'inferno-fela'
import ListContainer from './List/ListContainer'

const Main = createComponent(() => ({
  paddingRight: '1.5rem',
  borderRight: '1px solid #ccc'
}))

const MainContainer = ({ papers }) => (
  <Main>
    <ListContainer papers={papers} />
  </Main>
)

export default MainContainer