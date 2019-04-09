import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import MainContainer from './Main/MainContainer'
import SidebarContainer from './Sidebar/SidebarContainer'

const VideoDetail = createComponent(() => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)'
}))

const VideoDetailContainer = ({ VideoStore, match }) => {
  const video = VideoStore.fetchVideo(match.params.slug)
  
  if (video) { document.title = `${video.name} | Algonomicon` }

  return (
    <VideoDetail>
      <MainContainer video={video} />
      <SidebarContainer video={video} />
    </VideoDetail>
  )
}

export default inject('VideoStore')(observer(VideoDetailContainer))