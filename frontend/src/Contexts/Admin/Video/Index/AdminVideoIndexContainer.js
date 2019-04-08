import { inject, observer } from 'inferno-mobx'

const AdminVideoIndexContainer = ({ VideoStore }) => {
  VideoStore.fetchVideos()

  return (
    <div>
      { VideoStore.videos.map(video => (
        <p>{video.name}</p>
      ))}
    </div>
  )
}


export default inject('VideoStore')(observer(AdminVideoIndexContainer))