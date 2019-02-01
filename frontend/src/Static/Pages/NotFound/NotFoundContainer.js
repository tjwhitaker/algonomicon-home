import { Component } from 'inferno'
import { createComponent } from 'inferno-fela'
import bg from './space.jpg'
import { WrapperContainer } from '../../../Shared/Wrapper/WrapperContainer'

const styles = {
  background: () => ({
    background: 'url(' + bg + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw'
  })
}

const BackgroundContainer = createComponent(styles.background)

class NotFoundContainer extends Component {
  render() {
    return (
      <BackgroundContainer>
        <WrapperContainer>
          <h1>Not Found</h1>
        </WrapperContainer>
      </BackgroundContainer>
    )
  }
}

export default NotFoundContainer