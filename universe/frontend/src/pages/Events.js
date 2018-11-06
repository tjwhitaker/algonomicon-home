import { Component } from 'inferno'
import Categories from '../components/Categories/Categories'

class Events extends Component {
  render() {
    return (
      <div>
        <Categories />
        <h1>Events</h1>
      </div>
    )
  }
}

export default Events