import { css } from 'glamor'
import ContentContainer from './Content/ContentContainer'
import MastheadContainer from './Masthead/MastheadContainer'
import WrapperContainer from '../../Wrapper/WrapperContainer'
import hero from './nebula-small.jpg'

const banner = css({
  backgroundImage: 'url(' + hero + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center bottom',
  height: '30rem',
  position:'relative',
})

const HeaderContainer = () => (
  <header {...banner}>
    <WrapperContainer>
      <MastheadContainer />
      <ContentContainer />
    </WrapperContainer>
  </header>
)

export default HeaderContainer