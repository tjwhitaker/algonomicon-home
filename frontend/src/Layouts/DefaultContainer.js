import { Component } from 'inferno'
import HeaderContainer from './Header/HeaderContainer'
import FooterContainer from './Footer/FooterContainer'

class DefaultContainer extends Component {
  render() {
    return (
      <>
        <HeaderContainer />
        <main>{ this.props.children }</main>
        <FooterContainer />
      </>
    )
  }
}

export default DefaultContainer