import { Component } from 'inferno'

class LoadingContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loadingText: 'Loading'
    }
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.loadingText === 'Loading...') { 
        this.setState({loadingText: 'Loading'})
      }
      else {
        this.setState({loadingText: this.state.loadingText + '.'})
      }
    }, 500)
  }

  render() {
    return (
      <div>{this.state.loadingText}</div>
    )
  }
}

export default LoadingContainer