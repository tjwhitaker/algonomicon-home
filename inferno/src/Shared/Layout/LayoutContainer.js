import { createComponent } from 'inferno-fela'
import CategoriesContainer from './Categories/CategoriesContainer'
import FlashContainer from './Flash/FlashContainer'
import HeaderContainer from './Header/HeaderContainer'
import FooterContainer from './Footer/FooterContainer'
import WrapperContainer from '../Wrapper/WrapperContainer'

const Main = createComponent(() => ({
  background: '#fff',
  paddingBottom: '1.5rem',
  minHeight: '60vh'
}))

const AppLayoutContainer = (props) => (
  <div>
    <FlashContainer />
    <HeaderContainer />
    <Main>
      <WrapperContainer>
        <CategoriesContainer />
        { props.children }
      </WrapperContainer>
    </Main>
    <FooterContainer />
  </div>
)

export default AppLayoutContainer