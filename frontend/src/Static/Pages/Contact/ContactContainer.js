import { ContentContainer } from './Content/ContentContainer'
import { WrapperContainer } from '../../../Shared/Wrapper/WrapperContainer'

const setTitle = () => {
  document.title = 'Contact | Algonomicon'
}

export const ContactContainer = () => (
  <WrapperContainer onComponentDidMount={setTitle}>
    <ContentContainer />
  </WrapperContainer>
)
