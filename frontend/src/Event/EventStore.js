import { action, observable } from 'mobx'

class EventStore {
  @observable events = []

  @action fetchEvents() {
    fetch(`${process.env.INFERNO_APP_API}/events`)
      .then(response => response.json())
      .then(events => this.events = events)
  }
}

export default EventStore