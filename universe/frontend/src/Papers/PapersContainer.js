import { Component } from 'inferno'
import CategoriesContainer from '../Components/Categories/CategoriesContainer'

class PapersContainer extends Component {
  render() {
    return (
      <div>
        <CategoriesContainer />
        <div className="wrapper">
          <h1>Papers</h1>
        </div>
      </div>
    )
  }
}

export default PapersContainer