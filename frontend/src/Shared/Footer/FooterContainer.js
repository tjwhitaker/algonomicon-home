import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import WrapperContainer from '../Wrapper/WrapperContainer'

const styles = {
  container: () => ({
    background: '#111',
    color: '#ccc',
    marginTop: '1.4rem'
  }),
  copyright: () => ({
    margin: '0'
  })
}

const Container = createComponent(styles.container)
const Copyright = createComponent(styles.copyright, 'p')

class FooterContainer extends Component {
  render() {
    return (
      <Container>
        <WrapperContainer>
          <Copyright>&copy; Algonomicon LLC 2019</Copyright>
        </WrapperContainer>
      </Container>
    )
  }
}

export default FooterContainer