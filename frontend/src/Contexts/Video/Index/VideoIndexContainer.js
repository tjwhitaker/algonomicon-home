import { createComponent } from 'inferno-fela'
import { inject, observer } from 'inferno-mobx'
import MainContainer from './Main/MainContainer'
import SidebarContainer from './Sidebar/SidebarContainer'

const VideoIndex = createComponent(() => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)'
}))

const VideoIndexContainer = ({ VideoStore }) => {
  document.title = 'Videos | Algonomicon'
  VideoStore.fetchVideos()

  return (
    <VideoIndex>
      <MainContainer videos={VideoStore.videos} />
      <SidebarContainer />
    </VideoIndex>
  )
}


export default inject('VideoStore')(observer(VideoIndexContainer))