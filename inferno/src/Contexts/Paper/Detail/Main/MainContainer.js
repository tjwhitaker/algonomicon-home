import { createComponent } from 'inferno-fela'
import ContentContainer from './Content/ContentContainer'

const Main = createComponent(() => ({
  paddingRight: '1.5rem',
  borderRight: '1px solid #ccc'
}))

const MainContainer = ({ paper }) => (
  <Main>
    <ContentContainer paper={paper} />
  </Main>
)

export default MainContainer