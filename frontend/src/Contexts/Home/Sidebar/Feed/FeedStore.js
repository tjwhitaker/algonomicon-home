import { observable, runInAction } from 'mobx'

class FeedStore {
  @observable feed = []

  fetchFeed = async () => {
    if (this.feed.length === 0) {
      const response = await fetch(`${process.env.INFERNO_APP_API}/feed`)
      const feed = await response.json()

      runInAction(() => {
        this.feed = feed
      })
    }
  }
}

export default FeedStore