import { createComponent } from 'inferno-fela'
import NavLink from './NavLink'

const Nav = createComponent(() => ({
  display: 'flex',
  alignItems: 'center'
}))

const NavContainer = () => (
  <Nav>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <NavLink to="/forum">Forum</NavLink>
    <NavLink to="/store">Store</NavLink>
  </Nav>
)

export default NavContainer