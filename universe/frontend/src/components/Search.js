import { Component } from 'inferno'
import { Link } from 'inferno-router'

class Search extends Component {
  render() {
    return (
      <div className="search">
        <div className="input-group">
          <span className="input-icon"><i class="fa fa-search"></i></span>
          <input type="text" className="search-input" placeholder="Articles, Datasets, Research and more..." />
        </div>
        <Link to="/search" className="search-button">Search</Link>
      </div>
    )
  }
}

export default Search