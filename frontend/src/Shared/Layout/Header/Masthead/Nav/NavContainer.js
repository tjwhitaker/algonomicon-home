import { createComponent } from 'inferno-fela'
import NavLink from '../../../../Theme/Links'

const Nav = createComponent(() => ({
  display: 'flex',
  alignItems: 'center'
}))

const NavContainer = () => (
  <Nav>
    <NavLink to="/about" exact>About</NavLink>
    <NavLink to="/contact" exact>Contact</NavLink>
    <NavLink to="https://google.com/forum">Forum</NavLink>
  </Nav>
)

export default NavContainer