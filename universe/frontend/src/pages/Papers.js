import { Component } from 'inferno'
import Categories from '../components/Categories'

class Papers extends Component {
  render() {
    return (
      <div>
        <Categories />
        <h1>Papers</h1>
      </div>
    )
  }
}

export default Papers