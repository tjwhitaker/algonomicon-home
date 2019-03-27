import { createComponent } from 'inferno-fela'

const Main = createComponent(() => ({
  paddingRight: '1.5rem',
  borderRight: '1px solid #ccc'
}))

const MainContainer = ({ paper }) => (
  <Main>
    <p>Hello World</p>
  </Main>
)

export default MainContainer