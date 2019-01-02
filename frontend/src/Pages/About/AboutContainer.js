import { Component } from 'inferno'
import WrapperContainer from '../../Shared/Wrapper/WrapperContainer'

class AboutContainer extends Component {
  componentDidMount() {
    document.title = 'About | Algonomicon'
  }

  render() {
    return (
      <WrapperContainer>
        <h1>About</h1>
        <p>Welcome to my website! My name is Tim Whitaker and Algonomicon is the culmination of my deep passion for machine learning. I hope I can use this website as a way to provide some fun, enthusiasm and delight for those interested in machine learning.</p>
      </WrapperContainer>
    )
  }
}

export default AboutContainer