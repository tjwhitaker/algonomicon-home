import { css } from 'glamor'
import CopyrightContainer from './Copyright/CopyrightContainer'
import WrapperContainer from '../../Wrapper/WrapperContainer'

const container = css({
  background: '#111',
  marginTop: '1.4rem'
})

const FooterContainer = () => (
  <footer {...container}>
    <WrapperContainer>
      <CopyrightContainer />
    </WrapperContainer>
  </footer>
)

export default FooterContainer