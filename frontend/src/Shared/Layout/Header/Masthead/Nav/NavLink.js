import { createComponent } from 'inferno-fela'
import { Link } from 'inferno-router'

// Long Primer
const NavLink = createComponent(() => ({
  color: 'white',
  marginLeft: '1.4rem',
  fontWeight: 'bold',
  fontSize: '1.4rem',
  lineHeight: '1.8rem',

  ':hover': {
    color: '#FDCA7A'
  } 
}), Link, ['to'])

export default NavLink