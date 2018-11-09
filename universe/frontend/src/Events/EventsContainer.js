import { Component } from 'inferno'
import CategoriesContainer from '../Components/Categories/CategoriesContainer'

class EventsContainer extends Component {
  render() {
    return (
      <div>
        <CategoriesContainer />
        <div className="wrapper">
          <h1>Events</h1>
        </div>
      </div>
    )
  }
}

export default EventsContainer