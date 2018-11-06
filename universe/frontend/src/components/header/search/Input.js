import { Component } from 'inferno'
import SearchIcon from './Icon'

class SearchInput extends Component {
  render () {
    return (
      <div className="search-input">
        <SearchIcon />
        <input type="text" placeholder="Articles, Datasets, Research and more..." />
      </div>
    )
  }
}

export default SearchInput