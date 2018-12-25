import { action, observable } from 'mobx'

class FeedStore {
  @observable feed = []

  @action fetchFeed() {
    fetch(`${process.env.INFERNO_APP_API}/feed`)
      .then(response => response.json())
      .then(feed => this.feed = feed)
  }
}

export default FeedStore