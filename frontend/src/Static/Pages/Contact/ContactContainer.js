import { css } from 'glamor'
import FormContainer from './Form/FormContainer'
import MapContainer from './Map/MapContainer'
import MessageContainer from './Message/MessageContainer'

const flex = css({
  display: 'flex',
  flexWrap: 'wrap'
})

const ContactContainer = () => {
  document.title = 'Contact | Algonomicon'

  return (
    <div {...flex}>
      <MessageContainer />
      <FormContainer />
      <MapContainer />
    </div>
  )
}

export default ContactContainer