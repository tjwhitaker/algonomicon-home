import { Component } from 'inferno'

class ErrorContainer extends Component {
  render() {
    const { error } = this.props

    return (
      <div>{ error }</div>
    )
  }
}

export default ErrorContainer