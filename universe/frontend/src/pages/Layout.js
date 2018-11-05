import { Component } from 'inferno'
import Header from '../components/Header'
import Footer from '../components/Footer'

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default Layout