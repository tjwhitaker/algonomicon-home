import { Component } from 'inferno'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="wrapper">
          <div className="copyright">
            <p>&copy; Algonomicon LLC 2018</p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer