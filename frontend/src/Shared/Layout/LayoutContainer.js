import { CategoriesContainer } from './Categories/CategoriesContainer'
import { FlashContainer } from './Flash/FlashContainer'
import { HeaderContainer } from './Header/HeaderContainer'
import { FooterContainer } from './Footer/FooterContainer'

export const LayoutContainer = (props) => (
  <div>
    <FlashContainer />
    <HeaderContainer />
    <main>
      <CategoriesContainer />
      { props.children }
    </main>
    <FooterContainer />
  </div>
)
