import { Component } from 'inferno'
import CategoriesContainer from '../Components/Categories/CategoriesContainer'

class DatasetsContainer extends Component {
  render() {
    return (
      <div>
        <CategoriesContainer />
        <h1>Datasets</h1>
      </div>
    )
  }
}

export default DatasetsContainer