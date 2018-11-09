import { Component } from 'inferno'
import CategoriesContainer from '../Components/Categories/CategoriesContainer'
import FiltersContainer from './Filters/FiltersContainer'
import ShowcaseContainer from './Showcase/ShowcaseContainer'

class ArticlesContainer extends Component {
  render() {
    return (
      <div className="articles-container">
        <CategoriesContainer />
        <div className="wrapper">
          <div className="grid">
            <div className="primary">
              <ShowcaseContainer />
            </div>
            <div className="secondary">
              <h3 class="heading">Filters</h3>
              <FiltersContainer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ArticlesContainer