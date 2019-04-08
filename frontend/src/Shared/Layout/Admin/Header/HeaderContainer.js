import { createComponent } from 'inferno-fela'
import LogoContainer from './Logo/LogoContainer'

const Header = createComponent(() => ({
  gridArea: 'header',
  padding: '1rem'
}))

const HeaderContainer = () => (
  <Header>
    <LogoContainer />
  </Header>
)

export default HeaderContainer