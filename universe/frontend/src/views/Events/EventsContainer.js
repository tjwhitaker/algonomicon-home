import { Component } from 'inferno'
import CategoriesContainer from '../Components/Categories/CategoriesContainer'

class EventsContainer extends Component {
  render() {
    return (
      <div>
        <CategoriesContainer />
        <h1>Events</h1>
      </div>
    )
  }
}

export default EventsContainer