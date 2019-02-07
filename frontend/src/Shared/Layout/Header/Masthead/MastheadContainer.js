import { createComponent } from 'inferno-fela'
import LogoContainer from './Logo/LogoContainer'
import NavContainer from './Nav/NavContainer'

const Masthead = createComponent(() => ({
  position: 'relative',
  marginTop: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))

const MastheadContainer = () => (
  <Masthead>
    <LogoContainer />
    <NavContainer />
  </Masthead>
)

export default MastheadContainer