import { Component } from 'inferno'
import CategoriesContainer from '../Components/Categories/CategoriesContainer'

class DatasetsContainer extends Component {
  render() {
    return (
      <div>
        <CategoriesContainer />
        <div className="wrapper">
          <h1>Datasets</h1>
        </div>
      </div>
    )
  }
}

export default DatasetsContainer