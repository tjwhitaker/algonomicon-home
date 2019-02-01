import { Link } from 'inferno-router'
import { NavLink } from 'inferno-router'
import { createComponent } from 'inferno-fela'

const MastLink = createComponent(() => ({
  color: 'white',
  marginLeft: '1.4rem',
  fontWeight: 'bold',

  ':hover': {
    color: '#FDCA7A'
  } 
}), Link, ['to', 'exact'])

const CategoryLink = createComponent(() => ({
  marginRight: '2.8rem'
}), NavLink, ['to', 'exact', 'activeClassName'])

export { MastLink, CategoryLink }