import { css } from 'glamor'
import LogoContainer from './Logo/LogoContainer'
import NavContainer from './Nav/NavContainer'

const masthead = css({
  position: 'relative',
  marginTop: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

const MastheadContainer = () => (
  <div {...masthead}>
    <LogoContainer />
    <NavContainer />
  </div>
)

export default MastheadContainer