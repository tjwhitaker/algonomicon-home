import { Link } from 'inferno-router'
import { createComponent } from 'inferno-fela'

const NavLink = createComponent(() => ({
  color: 'white',
  marginLeft: '1.4rem',
  fontWeight: 'bold',

  ':hover': {
    color: '#FDCA7A'
  } 
}), Link, ['to', 'exact'])

export default NavLink