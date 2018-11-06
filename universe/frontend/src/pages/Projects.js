import { Component } from 'inferno'
import Categories from '../components/Categories'

class Projects extends Component {
  render() {
    return (
      <div>
        <Categories />
        <h1>Projects</h1>
      </div>
    )
  }
}

export default Projects