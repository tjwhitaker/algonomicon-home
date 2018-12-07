import { Component } from 'inferno'
import FlashContainer from './Flash/FlashContainer'
import HeaderContainer from './Header/HeaderContainer'
import FooterContainer from './Footer/FooterContainer'

class DefaultContainer extends Component {
  render() {
    return (
      <>
        <FlashContainer />
        <HeaderContainer />
        <main>{ this.props.children }</main>
        <FooterContainer />
      </>
    )
  }
}

export default DefaultContainer