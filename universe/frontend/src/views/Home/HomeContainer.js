import { Component } from 'inferno'
import CategoriesContainer from '../Components/Categories/CategoriesContainer'

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <CategoriesContainer />
        <div className="wrapper">
          <h1>Home</h1>
        </div>
      </div>
    )
  }
}

export default HomeContainer