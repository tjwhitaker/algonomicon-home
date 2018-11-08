import { Component } from 'inferno'
import CategoriesContainer from '../Components/Categories/CategoriesContainer'

class ProjectsContainer extends Component {
  render() {
    return (
      <div>
        <CategoriesContainer />
        <h1>Projects</h1>
      </div>
    )
  }
}

export default ProjectsContainer