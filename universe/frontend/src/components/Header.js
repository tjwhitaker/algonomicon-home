import { Component } from 'inferno'
import { Link } from 'inferno-router'
import Logo from './Logo'
import Search from './Search'

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
              <Link to="/about">About</Link>
              <a href="https://algonomicon.io">Community</a>
              <Link to="/contact">Contact</Link>
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