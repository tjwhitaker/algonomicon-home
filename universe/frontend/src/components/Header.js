import { Component } from 'inferno'
import { Link, NavLink } from 'inferno-router'
import Logo from './Logo'
import Search from '../Search/Search'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="wrapper">
          <div className="masthead">
            <div className="logo">
              <Link to="/" className="glitch">
                {[...Array(5)].map(() => <Logo />)}
              </Link>
            </div>
            <nav>
              <NavLink to="/about" activeClassName="active">About</NavLink>
              <a href="https://algonomicon.io">Community</a>
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </nav>
          </div>
          <div class="intro">
            <h2 className="tagline">What the Fuck is up with Artificial Intelligence</h2>
            <h1 className="title">The Open Source ML Commnuity</h1>
            <Search />
          </div>
        </div>
      </header>
    )
  }
}

export default Header