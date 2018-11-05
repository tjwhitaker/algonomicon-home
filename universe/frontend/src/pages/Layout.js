import { Component } from 'inferno'

class Layout extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Layout