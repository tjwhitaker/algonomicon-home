import ArticleStore from '../Articles/ArticleStore'
import EventStore from '../Events/EventStore'

class RootStore {
  constructor() {
    this.articleStore = new ArticleStore()
    this.eventStore = new EventStore()
  }
}

export default RootStore