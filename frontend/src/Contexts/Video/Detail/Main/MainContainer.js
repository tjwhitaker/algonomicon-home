import { createComponent } from 'inferno-fela'

const Main = createComponent(() => ({
  paddingRight: '1.5rem',
  borderRight: '1px solid #ccc'
}))

const MainContainer = ({ dataset }) => (
  <Main>
    <p>Lorem</p>
  </Main>
)

export default MainContainer