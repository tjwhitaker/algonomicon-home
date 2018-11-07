import { Component } from 'inferno'
import { NavLink } from 'inferno-router'

class CategoriesContainer extends Component {
  render() {
    return (
      <div className="categories-container">
        <div className="wrapper">
          <div className="list">
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/articles" activeClassName="active">Articles</NavLink>
            <NavLink to="/datasets" activeClassName="active">Datasets</NavLink>
            <NavLink to="/events" activeClassName="active">Events</NavLink>
            <NavLink to="/papers" activeClassName="active">Papers</NavLink>
            <NavLink to="/projects" activeClassName="active">Projects</NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default CategoriesContainer