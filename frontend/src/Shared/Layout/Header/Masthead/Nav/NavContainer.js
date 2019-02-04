import { Link } from 'inferno-router'
import { css } from 'glamor'
import { longPrimer } from '../../../../Theme/Text'

const flex = css({
  display: 'flex',
  alignItems: 'center'
})

const navLink = css({
  color: 'white',
  marginLeft: '1.4rem',
  fontWeight: 'bold',

  ':hover': {
    color: '#FDCA7A'
  } 
}, longPrimer)

export const NavContainer = () => (
  <nav {...flex}>
    <Link {...navLink} to="/about" exact>About</Link>
    <Link {...navLink} to="/contact" exact>Contact</Link>
    <Link {...navLink} to="https://google.com/forum">Forum</Link>
  </nav>
)
