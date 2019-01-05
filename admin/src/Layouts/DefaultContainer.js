import { Component } from 'inferno'
import HeaderContainer from './Header/HeaderContainer'
import FooterContainer from './Footer/FooterContainer'

class LayoutContainer extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <main>{ this.props.children }</main>
        <FooterContainer />
      </div>
    )
  }
}

export default LayoutContainer