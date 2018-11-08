import { Component } from 'inferno'
import CategoriesContainer from '../Components/Categories/CategoriesContainer'

class ArticlesContainer extends Component {
  render() {
    return (
      <div className="articles-container">
        <CategoriesContainer />
        <div className="wrapper">
          <h1>Articles</h1>
          <div className="grid">
          </div>
        </div>
      </div>
    )
  }
}

export default ArticlesContainer