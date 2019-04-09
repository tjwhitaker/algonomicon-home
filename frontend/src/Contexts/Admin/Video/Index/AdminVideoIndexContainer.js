import { inject, observer } from 'inferno-mobx'
import { Link } from 'inferno-router'

const AdminVideoIndexContainer = ({ VideoStore }) => {
  VideoStore.fetchVideos()

  return (
    <div>
      { VideoStore.videos.map(video => (
        <div>
          <Link to={`/admin/videos/${video.slug}`}>{video.name}</Link>
        </div>
      ))}
    </div>
  )
}


export default inject('VideoStore')(observer(AdminVideoIndexContainer))