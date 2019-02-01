import FlashContainer from './Flash/FlashContainer'
import HeaderContainer from './Header/HeaderContainer'
import FooterContainer from './Footer/FooterContainer'

const LayoutContainer = (props) => (
  <div>
    <FlashContainer />
    <HeaderContainer />
    <main>{ props.children }</main>
    <FooterContainer />
  </div>
)

export default LayoutContainer