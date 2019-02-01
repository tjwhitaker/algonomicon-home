import { Link } from 'inferno-router'
import LogoSVG from './LogoSVG'

const glitchBody = () => {
  document.body.className = 'glitched'
}

const unGlitchBody = () => {
  document.body.className = ''
}

export const LogoContainer = () => (
  <div className="logo" onMouseEnter={glitchBody} onMouseLeave={unGlitchBody}>
    <Link to="/" className="glitch">
      {[...Array(5)].map(() => <LogoSVG />)}
    </Link>
  </div>
)
