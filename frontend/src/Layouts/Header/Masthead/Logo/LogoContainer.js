import { Component } from 'inferno'
import { Link } from 'inferno-router'
import LogoSVG from './LogoSVG'

class LogoContainer extends Component {
  render() {
    return (
      <div className="logo">
        <Link to="/" className="glitch">
          {[...Array(5)].map(() => <LogoSVG />)}
        </Link>
      </div>
    )
  }
}

export default LogoContainer