import { action, observable } from 'mobx'

class EventStore {
  @observable events = []

  @action fetchEvents() {
    fetch('http://localhost:8000/events')
      .then(response => response.json())
      .then(events => this.events = events)
  }
}

export default EventStore