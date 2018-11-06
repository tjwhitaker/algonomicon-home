import { Component } from 'inferno'
import Categories from '../components/Categories'

class Articles extends Component {
  render() {
    return (
      <div>
        <Categories />
        <h1>Articles</h1>
      </div>
    )
  }
}

export default Articles