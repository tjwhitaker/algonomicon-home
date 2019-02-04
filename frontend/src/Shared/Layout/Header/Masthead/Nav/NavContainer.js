import { Link } from 'inferno-router'
import { css } from 'glamor'
import { longPrimer } from '../../../../Theme/Text'

const flex = css({
  display: 'flex',
  alignItems: 'center'
})

const mastLink = css({
  color: 'white',
  marginLeft: '1.4rem',
  fontWeight: 'bold',

  ':hover': {
    color: '#FDCA7A'
  } 
}, longPrimer)

export const NavContainer = () => (
  <nav {...flex}>
    <Link {...mastLink} to="/about" exact>About</Link>
    <Link {...mastLink} to="/contact" exact>Contact</Link>
    <Link {...mastLink} to="https://google.com/forum">Forum</Link>
  </nav>
)
