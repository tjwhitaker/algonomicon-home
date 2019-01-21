import { action, observable, set } from 'mobx'

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

  @action putEvent(data) {
    this.loading = true

    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'test'
      },
      method: 'PUT',
      body: JSON.stringify(data)
    }

    fetch(`${process.env.INFERNO_APP_API}/events/${data.id}`, options)
      .then(response => response.json())
      .then(event => this.events.map(i => i.id === data.id ? set(i, event) : i))
      .catch(error => console.log(error))
      .finally(() => this.loading = false)
  }
}

export default EventStore