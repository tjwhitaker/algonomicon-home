import { FormContainer } from './Form/FormContainer'
import { LocationContainer } from './Location/LocationContainer'
import { MessageContainer } from './Message/MessageContainer'
import { createComponent } from 'inferno-fela'

const Content = createComponent(() => ({
  display: 'flex'
}))

export const ContentContainer = () => (
  <Content>
    <MessageContainer />
    <FormContainer />
    <LocationContainer />
  </Content>
)