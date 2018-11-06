import { Component } from 'inferno'
import Categories from '../components/Categories/Categories'

class Datasets extends Component {
  render() {
    return (
      <div>
        <Categories />
        <h1>Datasets</h1>
      </div>
    )
  }
}

export default Datasets