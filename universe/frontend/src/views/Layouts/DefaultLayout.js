import { Component } from 'inferno'
import Header from './Header'
import Footer from './Footer'

class DefaultLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>{ this.props.children }</main>
        <Footer />
      </div>
    )
  }
}

export default DefaultLayout