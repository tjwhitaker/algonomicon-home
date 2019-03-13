import { createComponent } from 'inferno-fela'
import ContentContainer from './Content/ContentContainer'

const Main = createComponent(() => ({
  paddingRight: '1.5rem',
  borderRight: '1px solid #ccc'
}))


const MainContainer = ({ article }) => (
  <Main>
    <ContentContainer article={article} />
  </Main>
)

export default MainContainer