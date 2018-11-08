import { Component } from 'inferno'
import CategoriesContainer from '../Components/Categories/CategoriesContainer'
import ShowcaseContainer from './Showcase/ShowcaseContainer'
import FeedContainer from './Feed/FeedContainer'

class HomeContainer extends Component {
  render() {
    return (
      <div className="home-container">
        <CategoriesContainer />
        <div className="wrapper">
          <div className="grid">
            <div className="primary">
              <ShowcaseContainer />
            </div>
            <div className="secondary">
              <a class="heading" href="https://algonomicon.io">Feed</a>
              <FeedContainer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeContainer