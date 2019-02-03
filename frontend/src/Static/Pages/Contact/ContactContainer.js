import { FormContainer } from './Form/FormContainer'
import { LocationContainer } from './Location/LocationContainer'
import { MessageContainer } from './Message/MessageContainer'
import { WrapperContainer } from '../../../Shared/Wrapper/WrapperContainer'
import { createComponent } from 'inferno-fela'

const Contact = createComponent(() => ({
  display: 'flex',
  flexWrap: 'wrap'
}))

const setTitle = () => document.title = 'Contact | Algonomicon'

export const ContactContainer = () => (
  <WrapperContainer onComponentDidMount={setTitle}>
    <Contact>
      <MessageContainer />
      <FormContainer />
      <LocationContainer />
    </Contact>
  </WrapperContainer>
)
