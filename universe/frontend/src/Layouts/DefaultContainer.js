import { Component } from 'inferno'
import HeaderContainer from './Header/HeaderContainer'
import FooterContainer from './Footer/FooterContainer'

class DefaultContainer extends Component {
  render() {
    return (
      <div className="default-container">
        <HeaderContainer />
        <main>{ this.props.children }</main>
        <FooterContainer />
      </div>
    )
  }
}

export default DefaultContainer