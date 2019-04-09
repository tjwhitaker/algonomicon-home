import { inject, observer } from 'inferno-mobx'

const AdminVideoDetailContainer = ({ VideoStore, match }) => {
  const video = VideoStore.fetchVideo(match.params.slug)

  return (
    <div>
      { video && (
        <div>
          <div>
            <label>Name:</label>
            <input type="text" value={video.name} />
          </div>

          <div>
            <label>Slug:</label>
            <input type="text" value={video.slug} />
          </div>

          <div>
            <label>Hero:</label>
            <input type="text" value={video.hero} />
          </div>

          <div>
            <label>URL:</label>
            <input type="text" value={video.url} />
          </div>

          <div>
            <label>Description:</label> 
            <textarea rows="5" value={video.description} />
          </div>
        </div>
      )}
    </div>
  )
}


export default inject('VideoStore')(observer(AdminVideoDetailContainer))