import { Component } from 'inferno'
import CategoriesContainer from '../Components/Categories/CategoriesContainer'

class ProjectsContainer extends Component {
  render() {
    return (
      <div>
        <CategoriesContainer />
        <div className="wrapper">
          <h1>Projects</h1>
        </div>
      </div>
    )
  }
}

export default ProjectsContainer