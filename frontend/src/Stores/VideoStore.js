import { observable, runInAction } from 'mobx'

class VideoStore {
  @observable videos = []

  fetchVideos = async () => {
    if (this.videos.length === 0) {
      const response = await fetch(`${process.env.INFERNO_APP_API}/videos`)
      const videos = await response.json()

      runInAction(() => {
        this.videos = videos
      })
    }
  }

  fetchVideo = (slug) => {
    if (this.videos.length === 0) {
      this.fetchVideos()
    }

    return this.videos.find(video => video.slug === slug)
  }
}

export default VideoStore