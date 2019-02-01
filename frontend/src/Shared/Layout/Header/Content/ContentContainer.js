import { createComponent } from 'inferno-fela'
import CanonContainer from './Canon/CanonContainer'
import RegistrationContainer from './Registration/RegistrationContainer'

const Content = createComponent(() => ({
  position: 'absolute',
  width: '100%',
  left: '1.4rem',
  bottom: '2.8rem',
  paddingRight: '1.4rem'
}))

export const ContentContainer = () => (
  <Content>
    <CanonContainer />
    <RegistrationContainer />
  </Content>
)
