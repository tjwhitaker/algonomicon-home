import { ContentContainer } from './Content/ContentContainer'
import { MastheadContainer } from './Masthead/MastheadContainer'
import { WrapperContainer } from '../../Wrapper/WrapperContainer'
import { createComponent } from 'inferno-fela'
import hero from './nebula-small.jpg'

const Header = createComponent(() => ({
  backgroundImage: 'url(' + hero + ')',
  backgroundSize: 'cover',
  backgroundPosition: 'center bottom',
  height: '30rem',
  position:'relative',
}))

export const HeaderContainer = () => (
  <Header>
    <WrapperContainer>
      <MastheadContainer />
      <ContentContainer />
    </WrapperContainer>
  </Header>
)
