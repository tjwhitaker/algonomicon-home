import { Component } from 'inferno'
import { Link } from 'inferno-router'
import { createComponent } from 'inferno-fela'
import LogoContainer from './Logo/LogoContainer'

const styles = {
  masthead: () => ({
    position: 'relative',
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }),
  nav: () => ({
    display: 'flex',
    alignItems: 'center'
  }),
  navLink: (props) => ({
    color: 'white',
    marginLeft: '1.4rem',
    fontWeight: 'bold',
    ':hover': {
      color: props.theme.gryffindor
    }
  })
}

const Masthead = createComponent(styles.masthead)
const Nav = createComponent(styles.nav)
const ExternalLink = createComponent(styles.navLink, 'a', ['href'])
const InternalLink = createComponent(styles.navLink, Link, ['to', 'exact'])


class MastheadContainer extends Component {
  render() {
    return (
      <Masthead>
        <LogoContainer />
        <Nav>
          <InternalLink to="/about" exact>About</InternalLink>
          <ExternalLink href="https://algonomicon.io">Community</ExternalLink>
          <InternalLink to="/contact" exact>Contact</InternalLink>
        </Nav>
      </Masthead>
    )
  }
}

export default MastheadContainer