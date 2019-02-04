import { FormContainer } from './Form/FormContainer'
import { MapContainer, initMap } from './Map/MapContainer'
import { MessageContainer } from './Message/MessageContainer'
import { WrapperContainer } from '../../../Shared/Wrapper/WrapperContainer'
import { css } from 'glamor'

const flex = css({
  display: 'flex',
  flexWrap: 'wrap'
})

export const ContactContainer = () => {
  document.title = 'Contact | Algonomicon'

  return (
    <WrapperContainer>
      <div {...flex}>
        <MessageContainer />
        <FormContainer />
        <MapContainer onComponentDidMount={initMap}/>
      </div>
    </WrapperContainer>
  )
}
