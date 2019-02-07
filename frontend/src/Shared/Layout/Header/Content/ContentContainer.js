import { createComponent } from 'inferno-fela'
import ScreamerContainer from './Screamer/ScreamerContainer'
import RegistrationContainer from './Registration/RegistrationContainer'

const Content = createComponent(() => ({
  position: 'absolute',
  width: '100%',
  left: '1.4rem',
  bottom: '2.0rem',
  paddingRight: '1.4rem'
}))

const ContentContainer = () => (
  <Content>
    <ScreamerContainer />
    <RegistrationContainer />
  </Content>
)

export default ContentContainer