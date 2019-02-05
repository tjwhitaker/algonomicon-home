import CategoriesContainer from './Categories/CategoriesContainer'
import FlashContainer from './Flash/FlashContainer'
import HeaderContainer from './Header/HeaderContainer'
import FooterContainer from './Footer/FooterContainer'
import WrapperContainer from '../Wrapper/WrapperContainer'

const LayoutContainer = (props) => (
  <div>
    <FlashContainer />
    <HeaderContainer />
    <WrapperContainer>
      <CategoriesContainer />
      { props.children }
    </WrapperContainer>
    <FooterContainer />
  </div>
)

export default LayoutContainer