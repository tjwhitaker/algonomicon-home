import { action, observable } from 'mobx'

class EventStore {
  @observable events = []
  @observable loading = false

  @action fetchEvents() {
    this.loading = true
    
    fetch(`${process.env.INFERNO_APP_API}/events`)
      .then(response => response.json())
      .then(events => this.events = events)
      .catch(error => console.log(error))
      .finally(() => this.loading = false)
  }
}

export default EventStore