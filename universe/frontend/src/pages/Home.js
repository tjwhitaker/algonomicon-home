import { Component } from 'inferno'
import Categories from '../components/Categories'

class Home extends Component {
  render() {
    return (
      <div>
        <Categories />
        <h1>Home</h1>
      </div>
    )
  }
}

export default Home