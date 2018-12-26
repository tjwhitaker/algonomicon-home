import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import MastheadContainer from './Masthead/MastheadContainer'
import IntroContainer from './Intro/IntroContainer'
import hero from './1.jpg'

const styles = {
  container: () => ({
    backgroundImage: 'url('+ hero + ')',
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
  }),
  wrapper: () => ({
    maxWidth: '1024px',
    margin: '0 auto',
    padding: '1.4rem',
    position: 'relative',
    height: '100%'
  })
}

const Container = createComponent(styles.container)
const Wrapper = createComponent(styles.wrapper)

class Header extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <MastheadContainer />
          <IntroContainer />
        </Wrapper>
      </Container>
    )
  }
}

export default Header