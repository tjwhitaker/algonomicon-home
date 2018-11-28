import { action, observable } from 'mobx'

class FeedStore {
  @observable feed = []

  @action fetchFeed() {
    fetch('https://algonomicon.io/api/v1/timelines/public')
      .then(response => response.json())
      .then(feed => this.feed = feed)
  }
}

export default FeedStore