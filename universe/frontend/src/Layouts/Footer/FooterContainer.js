import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'

const styles = {
  container: () => ({
    background: '#111',
    color: '#ccc'
  }),
  wrapper: () => ({
    maxWidth: '1024px',
    margin: '0 auto',
    padding: '1.4rem'
  }),
  copyright: () => ({
    margin: '0'
  })
}

const Container = createComponent(styles.container)
const Wrapper = createComponent(styles.wrapper)
const Copyright = createComponent(styles.copyright, 'p')

class Footer extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Copyright>&copy; Algonomicon LLC 2018</Copyright>
        </Wrapper>
      </Container>
    )
  }
}

export default Footer