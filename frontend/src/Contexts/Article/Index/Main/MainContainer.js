import { createComponent } from 'inferno-fela'
import ShowcaseContainer from './Showcase/ShowcaseContainer'

const Main = createComponent(() => ({
  borderRight: '1px solid #ccc',
  paddingRight: '1.5rem'
}))

const MainContainer = () => (
  <Main>
    <ShowcaseContainer />
  </Main>
)

export default MainContainer