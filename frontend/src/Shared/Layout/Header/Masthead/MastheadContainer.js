import { LogoContainer } from './Logo/LogoContainer'
import { NavContainer } from './Nav/NavContainer'
import { createComponent } from 'inferno-fela'

const Masthead = createComponent(() => ({
  position: 'relative',
  marginTop: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}))

export const MastheadContainer = () => (
  <Masthead>
    <LogoContainer />
    <NavContainer />
  </Masthead>
)
