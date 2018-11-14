import { observable } from 'mobx'

class EventStore {
  @observable events = []

  constructor() {}
}

export default EventStore