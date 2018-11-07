import { Component } from 'inferno'
import { Link, NavLink } from 'inferno-router'
import Logo from './Logo'

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
            <div className="search">
              <div className="search-input">
                <span className="search-icon">
                  <svg aria-hidden="true" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                </span>
                <input type="text" placeholder="Articles, Datasets, Research and more..." />
              </div>
              <Link to="/search" className="search-button">Search</Link>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header