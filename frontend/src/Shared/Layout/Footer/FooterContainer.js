import { createComponent } from 'inferno-fela'
import CopyrightContainer from './Copyright/CopyrightContainer'
import WrapperContainer from '../../Wrapper/WrapperContainer'

const Footer = createComponent(() => ({
  background: '#111',
  marginTop: '1.4rem'
}))

const FooterContainer = () => (
  <Footer>
    <WrapperContainer>
      <CopyrightContainer />
    </WrapperContainer>
  </Footer>
)

export default FooterContainer