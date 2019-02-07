import { createComponent } from 'inferno-fela'
import WrapperContainer from '../../../Shared/Wrapper/WrapperContainer'
import bg from './space.jpg'

const NotFound = createComponent(() => ({
  background: 'url(' + bg + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100vw'
}))

const NotFoundContainer = () => (
  <NotFound>
    <WrapperContainer>
      <h1>Not Found</h1>
    </WrapperContainer>
  </NotFound>
)

export default NotFoundContainer