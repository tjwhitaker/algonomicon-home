import { WrapperContainer } from '../../Wrapper/WrapperContainer'
import { CopyrightContainer } from './Copyright/CopyrightContainer'
import { createComponent } from 'inferno-fela'

const Footer = createComponent(() => ({
  background: '#111',
  marginTop: '1.4rem'
}))

export const FooterContainer = () => (
  <Footer>
    <WrapperContainer>
      <CopyrightContainer />
    </WrapperContainer>
  </Footer>
)
