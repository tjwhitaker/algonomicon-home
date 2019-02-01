import { createComponent } from 'inferno-fela'
import MastheadContainer from './Masthead/MastheadContainer'
import IntroContainer from './Intro/IntroContainer'
import WrapperContainer from '../../Wrapper/WrapperContainer'
import hero from './nebula-small.jpg'

const Header = createComponent(() => ({
  backgroundImage: 'url(' + hero + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center bottom',
  height: '30rem',
  position:'relative',

  ':before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left:0,
    right:0,
    bottom:0,
    background: 'black',
    opacity:0 
  }
}))

const HeaderContainer = () => (
  <Header>
    <WrapperContainer>
      <MastheadContainer />
      <IntroContainer />
    </WrapperContainer>
  </Header>
)

export default HeaderContainer