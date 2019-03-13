import { observable, runInAction } from 'mobx'

class EventStore {
  @observable events = []
  @observable loading = false

  fetchEvents = async () => {
    if (this.events.length === 0) {
      const response = await fetch(`${process.env.INFERNO_APP_API}/events`)
      const events = await response.json()

      runInAction(() => {
        this.events = events
      })
    }
  }

  fetchEvent = (slug) => {
    if (this.events.length === 0) {
      this.fetchEvents()
    }

    return this.events.find(event => event.slug === slug)
  }
}

export default EventStore