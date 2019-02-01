import { Component } from 'inferno'
import { Link } from 'inferno-router'
import LogoSVG from './LogoSVG'

class LogoContainer extends Component {
  constructor(props) {
    super(props)

    this.mouseEnter = this.mouseEnter.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
  }

  mouseEnter() {
    document.body.className = 'glitched'
  }
  mouseLeave() {
    document.body.className = ''
  }

  render() {
    return (
      <div className="logo" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <Link to="/" className="glitch">
          {[...Array(5)].map(() => <LogoSVG />)}
        </Link>
      </div>
    )
  }
}

export default LogoContainer