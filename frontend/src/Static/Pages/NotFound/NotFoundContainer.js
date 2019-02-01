import { WrapperContainer } from '../../../Shared/Wrapper/WrapperContainer'
import { createComponent } from 'inferno-fela'
import bg from './space.jpg'

const NotFound = createComponent(() => ({
  background: 'url(' + bg + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100vw'
}))

export const NotFoundContainer = () => (
  <NotFound>
    <WrapperContainer>
      <h1>Not Found</h1>
    </WrapperContainer>
  </NotFound>
)
