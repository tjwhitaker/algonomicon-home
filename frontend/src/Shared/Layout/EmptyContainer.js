import { Component } from 'inferno'

class EmptyContainer extends Component {
  render() {
    return (
      <main>{ this.props.children }</main>
    )
  }
}

export default EmptyContainer