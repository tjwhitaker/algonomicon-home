import { MastLink } from '../../../../Theme/Links'
import { createComponent } from 'inferno-fela'

const Nav = createComponent(() => ({
  display: 'flex',
  alignItems: 'center'
}))

export const NavContainer = () => (
  <Nav>
    <MastLink to="/about" exact>About</MastLink>
    <MastLink to="/contact" exact>Contact</MastLink>
    <MastLink to="https://google.com/forum">Forum</MastLink>
  </Nav>
)
