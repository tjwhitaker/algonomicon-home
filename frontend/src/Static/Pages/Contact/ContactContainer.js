import { createComponent } from 'inferno-fela'
import FormContainer from './Form/FormContainer'
import MapContainer from './Map/MapContainer'
import MessageContainer from './Message/MessageContainer'

const Contact = createComponent(() => ({
  display: 'flex',
  flexWrap: 'wrap'
}))

const ContactContainer = () => {
  document.title = 'Contact | Algonomicon'

  return (
    <Contact>
      <MessageContainer />
      <FormContainer />
      <MapContainer />
    </Contact>
  )
}

export default ContactContainer