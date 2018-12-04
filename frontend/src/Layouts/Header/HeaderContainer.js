import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import MastheadContainer from './Masthead/MastheadContainer'
import IntroContainer from './Intro/IntroContainer'
import nebula from './nebula.jpg'

const styles = {
  container: () => ({
    backgroundImage: 'url('+ nebula + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '35vh'
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