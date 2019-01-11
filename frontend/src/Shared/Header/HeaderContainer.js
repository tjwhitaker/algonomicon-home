import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import MastheadContainer from './Masthead/MastheadContainer'
import IntroContainer from './Intro/IntroContainer'
import WrapperContainer from '../Wrapper/WrapperContainer'
import hero from './nebula.jpg'

const styles = {
  container: () => ({
    backgroundImage: 'url(' + hero + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
  })
}

const Container = createComponent(styles.container)

class HeaderContainer extends Component {
  render() {
    return (
      <Container>
        <WrapperContainer>
          <MastheadContainer />
          <IntroContainer />
        </WrapperContainer>
      </Container>
    )
  }
}

export default HeaderContainer