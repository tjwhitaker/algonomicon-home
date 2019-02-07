import { createComponent } from 'inferno-fela'
import { Link } from 'inferno-router'

// Long Primer
const CategoryLink = createComponent(() => ({
  marginRight: '2.8rem',
  color: '#007bff',
  fontWeight: 'bold',
  fontSize: '1.4rem',
  lineHeight: '1.8rem'
}), Link, ['to', 'activeClassName'])

export default CategoryLink