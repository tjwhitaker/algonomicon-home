import { createComponent } from 'inferno-fela'
import GridContainer from './Grid/GridContainer'

const Main = createComponent(() => ({
  paddingRight: '1.5rem',
  borderRight: '1px solid #ccc'
}))

const MainContainer = ({ videos }) => (
  <Main>
    <GridContainer videos={videos} />
  </Main>
)

export default MainContainer