import { Component } from 'inferno'
import { Link } from 'inferno-router'
import SearchInput from './Input'

class Search extends Component {
  render() {
    return (
      <div className="search">
        <SearchInput /> 
        <Link to="/search" className="search-button">Search</Link>
      </div>
    )
  }
}

export default Search