import { Component } from 'inferno'
import CategoriesContainer from '../Components/Categories/CategoriesContainer'

class PapersContainer extends Component {
  render() {
    return (
      <div>
        <CategoriesContainer />
        <h1>Papers</h1>
      </div>
    )
  }
}

export default PapersContainer