import { Link } from 'inferno-router'
import { NavLink } from 'inferno-router'
import { createComponent } from 'inferno-fela'

export const MastLink = createComponent(() => ({
  color: 'white',
  marginLeft: '1.4rem',
  fontWeight: 'bold',

  ':hover': {
    color: '#FDCA7A'
  } 
}), Link, ['to', 'exact'])

export const CategoryLink = createComponent(() => ({
  marginRight: '2.8rem'
}), NavLink, ['to', 'exact', 'activeClassName'])
