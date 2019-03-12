import { createComponent } from 'inferno-fela'
import WrapperContainer from '../../../Shared/Wrapper/WrapperContainer'
import bg from './BG.png'
import FG from './FG'

const NotFound = createComponent(() => ({
  backgroundImage: 'url(' + bg + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100vw'
}))

const NotFoundContainer = () => (
  <NotFound>
    <WrapperContainer>
      <FG />
    </WrapperContainer>
  </NotFound>
)

export default NotFoundContainer