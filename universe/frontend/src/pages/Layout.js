import { Component } from 'inferno'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <div className="wrapper">
            {this.props.children}
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default Layout