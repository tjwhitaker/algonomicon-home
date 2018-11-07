import { Component } from 'inferno'
import CategoriesContainer from '../Components/Categories/CategoriesContainer'

class ArticlesContainer extends Component {
  render() {
    return (
      <div>
        <CategoriesContainer />
        <h1>Articles</h1>
      </div>
    )
  }
}

export default ArticlesContainer