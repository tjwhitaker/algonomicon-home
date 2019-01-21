import { Component } from 'inferno'
import FlashContainer from '../Flash/FlashContainer'
import HeaderContainer from '../Header/HeaderContainer'
import FooterContainer from '../Footer/FooterContainer'

class LayoutContainer extends Component {
  render() {
    return (
      <div>
        <FlashContainer />
        <HeaderContainer />
        <main>{ this.props.children }</main>
        <FooterContainer />
      </div>
    )
  }
}

export default LayoutContainer