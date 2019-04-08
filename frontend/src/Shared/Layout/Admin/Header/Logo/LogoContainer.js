import { Link } from 'inferno-router'
import LogoSVG from './LogoSVG'

const glitchBody = () => {
  document.body.className = 'glitched'
}

const unGlitchBody = () => {
  document.body.className = ''
}

const LogoContainer = () => (
  <div className="logo" onMouseEnter={glitchBody} onMouseLeave={unGlitchBody} style={{width: 'min-content'}}>
    <Link to="/" className="glitch">
      {[...Array(5)].map(() => <LogoSVG />)}
    </Link>
  </div>
)

export default LogoContainer